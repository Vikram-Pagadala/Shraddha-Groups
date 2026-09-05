import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 5
const WINDOW_MS = 10 * 60 * 1000 // 10 minutes

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return true
  }

  if (entry.count >= RATE_LIMIT) return false
  entry.count++
  return true
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: 'Too many requests. Please try again later.' },
      { status: 429 },
    )
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 })
  }

  // Honeypot check
  if (body.company) {
    return NextResponse.json({ ok: true }) // silent reject
  }

  // Timing check — must be at least 3s after form render
  const renderedAt = body.renderedAt as number
  if (!renderedAt || Date.now() - renderedAt < 3000) {
    return NextResponse.json({ ok: true }) // silent reject (bot)
  }

  // Required field validation
  if (!body.name || !body.phone || !body.message || !body.projectType) {
    return NextResponse.json(
      { ok: false, error: 'Missing required fields.' },
      { status: 400 },
    )
  }

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL
  const sharedKey = process.env.FORM_SHARED_KEY

  if (!scriptUrl || !sharedKey) {
    // In development without env vars, just log and return ok
    console.log('[Contact form] No GOOGLE_SCRIPT_URL or FORM_SHARED_KEY set. Payload:', body)
    return NextResponse.json({ ok: true })
  }

  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        key: sharedKey,
        name: body.name,
        phone: body.phone,
        email: body.email ?? '',
        projectType: body.projectType,
        location: body.location ?? '',
        budget: body.budget ?? '',
        message: body.message,
        company: body.company ?? '',
        source: 'website',
        country: req.headers.get('cf-ipcountry') ?? '',
      }),
      redirect: 'follow',
    })

    const result = await response.json()
    if (result.ok) {
      return NextResponse.json({ ok: true })
    } else {
      throw new Error(result.error ?? 'Script error')
    }
  } catch (err) {
    console.error('[Contact form] Error forwarding to Apps Script:', err)
    return NextResponse.json(
      { ok: false, error: 'Failed to send. Please try again.' },
      { status: 500 },
    )
  }
}
