import { Quote } from 'lucide-react'
import { testimonials } from '@/content/testimonials'

export default function Testimonials() {
  return (
    <>
      <h2 className="font-serif text-[var(--color-slate-900)] mb-10"
        style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', lineHeight: '1.15', letterSpacing: '-0.01em' }}
      >
        What clients say
      </h2>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {testimonials.slice(0, 2).map((t) => (
          <figure
            key={t.id}
            className="card p-7 flex flex-col gap-5 bg-[var(--color-paper)]"
          >
            <Quote
              size={24}
              className="text-[var(--color-brass)] opacity-60"
              aria-hidden="true"
            />
            <blockquote>
              <p className="text-[var(--color-slate-900)] text-[1rem] leading-[1.7] italic">
                &ldquo;{t.quote}&rdquo;
              </p>
            </blockquote>
            <figcaption className="flex flex-col border-t border-[var(--color-rule)] pt-4 mt-auto">
              <span className="font-600 text-[0.9375rem] text-[var(--color-slate-900)]">{t.name}</span>
              <span className="text-[0.8125rem] text-[var(--color-slate-600)]">
                {t.role} · {t.project}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  )
}
