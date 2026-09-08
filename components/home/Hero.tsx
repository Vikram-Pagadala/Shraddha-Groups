import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section
      className="relative min-h-[100svh] flex items-center pt-32 pb-16 md:pb-24 overflow-hidden"
      aria-label="Hero"
    >
      {/* Background photo */}
      <Image
        src="/images/hero.jpg"
        alt="Completed multi-storey residential building in Hyderabad, front elevation at golden hour"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        quality={85}
      />

      {/* Slate overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(27,39,51,0.85) 0%, rgba(27,39,51,0.4) 50%, rgba(27,39,51,0.25) 100%)' }}
        aria-hidden="true"
      />

      {/* Paper slab content card */}
      <div className="container relative z-10">
        <div
          className="max-w-[600px] bg-[var(--color-paper)] p-6 sm:p-8 md:p-10 rounded-[4px]"
          style={{ boxShadow: '0 8px 40px rgba(27,39,51,0.25)' }}
        >
          <h1 className="hero-animate font-serif text-[var(--color-slate-900)] mb-4"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', lineHeight: '1.2', letterSpacing: '-0.01em' }}
          >
            Our commitment — to build better communities, deliver with integrity, and create properties you can be proud to own.
          </h1>

          <p className="hero-animate hero-animate-delay-1 text-[var(--color-slate-600)] text-[1.0625rem] leading-[1.65] mb-8 max-w-[52ch]">
            Apartments, villas, & open plots
          </p>

          <div className="hero-animate hero-animate-delay-2 flex flex-wrap gap-3">
            <Button href="/contact" variant="primary" size="lg" id="hero-cta-visit">
              Request a site visit
            </Button>
            <Button href="/projects" variant="secondary" size="lg" id="hero-cta-projects">
              See our work
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
