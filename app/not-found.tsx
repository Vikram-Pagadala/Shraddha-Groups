import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-concrete)] flex items-center pt-[72px]">
      <div className="container py-20">
        <div className="max-w-[500px]">
          <p
            className="tabular-nums font-serif font-700 text-[var(--color-rule)] mb-4"
            style={{ fontSize: '6rem', lineHeight: '1' }}
            aria-hidden="true"
          >
            404
          </p>
          <h1
            className="font-serif text-[var(--color-slate-900)] mb-4"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', lineHeight: '1.15', letterSpacing: '-0.01em' }}
          >
            Page not found.
          </h1>
          <p className="text-[var(--color-slate-600)] text-[1rem] leading-[1.65] mb-8 max-w-[48ch]">
            The page you are looking for may have moved or may not exist. Try the links below.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[4px] bg-[var(--color-slate-900)] text-[var(--color-paper)] font-600 text-[0.9375rem] hover:bg-[var(--color-slate-800)] transition-colors"
              id="not-found-projects"
            >
              See our projects
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[4px] border border-[var(--color-slate-900)] text-[var(--color-slate-900)] font-600 text-[0.9375rem] hover:bg-[var(--color-slate-900)] hover:text-[var(--color-paper)] transition-colors"
              id="not-found-contact"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
