import Button from '@/components/ui/Button'

export default function CtaBand() {
  return (
    <section
      className="bg-[var(--color-slate-900)] py-20 md:py-28"
      aria-label="Call to action"
    >
      <div className="container text-center">
        <h2 className="font-serif text-[var(--color-paper)] mb-4"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: '1.15', letterSpacing: '-0.01em' }}
        >
          Have drawings ready, or just an idea?
        </h2>
        <p className="text-[var(--color-slate-400)] text-[1.0625rem] leading-[1.65] max-w-[52ch] mx-auto mb-10">
          Send us your site details and we will call back within one working day to discuss what you need.
        </p>
        <Button href="/contact" variant="primary" size="lg" id="cta-band-contact">
          Send us your requirement
        </Button>
      </div>
    </section>
  )
}
