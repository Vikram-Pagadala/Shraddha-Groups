import type { Metadata } from 'next'
import { CheckSquare } from 'lucide-react'
import Section from '@/components/layout/Section'
import Button from '@/components/ui/Button'
import { services } from '@/content/services'

export const metadata: Metadata = {
  title: 'Civil Construction Services in Hyderabad',
  description:
    'Turnkey civil contracting services across Hyderabad and Rangareddy: residential construction, commercial complexes, industrial warehouses, and renovation.',
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-[var(--color-slate-900)] pt-[72px]">
        <div className="container py-16">
          <h1
            className="font-serif text-[var(--color-paper)]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: '1.1', letterSpacing: '-0.01em' }}
          >
            Services
          </h1>
          <p className="text-[var(--color-slate-400)] text-[1.0625rem] max-w-[50ch] leading-[1.65] mt-3">
            What we build and how we price it.
          </p>
        </div>
      </div>

      {services.map((service, i) => (
        <Section
          key={service.id}
          label={service.title}
          id={service.anchor}
          bg={i % 2 === 0 ? 'paper' : 'concrete'}
        >
          <div className="grid grid-cols-1 xl:grid-cols-[3fr_2fr] gap-12 xl:gap-16 items-start">
            {/* Content */}
            <div>
              <h2 className="font-serif text-[var(--color-slate-900)] mb-5"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: '1.15', letterSpacing: '-0.01em' }}
              >
                {service.title}
              </h2>
              <p className="text-[var(--color-slate-600)] text-[1rem] leading-[1.65] mb-8 max-w-[60ch]">
                {service.description}
              </p>

              <h3 className="font-serif font-700 text-[var(--color-slate-900)] mb-4"
                style={{ fontSize: '1.125rem' }}
              >
                Typical scope
              </h3>
              <ul className="space-y-2.5 mb-8" role="list">
                {service.scope.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.9375rem] text-[var(--color-slate-600)]">
                    <CheckSquare size={16} className="text-[var(--color-brass)] shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button href="/contact" variant="primary" size="md" id={`service-cta-${service.id}`}>
                Enquire about this service
              </Button>
            </div>

            {/* Info card */}
            <div className="credentials-list">
              <div className="px-5 py-4 border-b border-[var(--color-rule)] bg-[var(--color-concrete)]">
                <p className="font-600 text-[0.8125rem] tracking-[0.05em] uppercase text-[var(--color-slate-600)]">
                  At a glance
                </p>
              </div>
              <div className="divide-y divide-[var(--color-rule)]">
                <div className="px-5 py-4">
                  <p className="text-[0.75rem] font-600 uppercase tracking-[0.06em] text-[var(--color-slate-400)] mb-1">Duration</p>
                  <p className="text-[0.9375rem] font-500 text-[var(--color-slate-900)]">{service.typicalDuration}</p>
                </div>
                <div className="px-5 py-4">
                  <p className="text-[0.75rem] font-600 uppercase tracking-[0.06em] text-[var(--color-slate-400)] mb-1">Pricing</p>
                  <p className="text-[0.9375rem] font-500 text-[var(--color-slate-900)]">{service.pricingModel}</p>
                </div>
                <div className="px-5 py-4">
                  <p className="text-[0.75rem] font-600 uppercase tracking-[0.06em] text-[var(--color-slate-400)] mb-3">What you receive</p>
                  <ul className="space-y-2" role="list">
                    {service.whatYouGet.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[0.875rem] text-[var(--color-slate-600)]">
                        <span className="text-[var(--color-brass)] font-700 shrink-0 mt-0.5" aria-hidden="true">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>
      ))}
    </>
  )
}
