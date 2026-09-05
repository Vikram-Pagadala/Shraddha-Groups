import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { site } from '@/content/site'

export const metadata: Metadata = {
  title: 'Enquiry received',
  description: 'Your enquiry has been received. We will call back within one working day.',
  robots: { index: false },
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[var(--color-concrete)] flex items-center justify-center pt-[72px]">
      <div className="container py-20">
        <div className="max-w-[540px]">
          <div className="w-14 h-14 flex items-center justify-center bg-[var(--color-slate-900)] rounded-[4px] mb-8">
            <CheckCircle size={28} className="text-[var(--color-brass)]" aria-hidden="true" />
          </div>

          <h1
            className="font-serif text-[var(--color-slate-900)] mb-5"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: '1.1', letterSpacing: '-0.01em' }}
          >
            Enquiry received.
          </h1>

          <div className="space-y-4 text-[var(--color-slate-600)] text-[1rem] leading-[1.65] mb-8 max-w-[52ch]">
            <p>
              We have received your enquiry and will call back within one working day. If you sent drawings or dimensions, we&apos;ll review them before calling.
            </p>
            <p>
              For anything urgent, call us directly on{' '}
              <a
                href={`tel:${site.phone}`}
                className="text-[var(--color-slate-900)] font-600 hover:text-[var(--color-brass-dark)] transition-colors"
              >
                {site.phone}
              </a>
              . We&apos;re available {site.hours}.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[4px] bg-[var(--color-slate-900)] text-[var(--color-paper)] font-600 text-[0.9375rem] hover:bg-[var(--color-slate-800)] transition-colors"
              id="thankyou-projects"
            >
              See our projects
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[4px] border border-[var(--color-slate-900)] text-[var(--color-slate-900)] font-600 text-[0.9375rem] hover:bg-[var(--color-slate-900)] hover:text-[var(--color-paper)] transition-colors"
              id="thankyou-home"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
