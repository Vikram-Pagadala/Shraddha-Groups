import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { site } from '@/content/site'

const credentials = [
  { label: 'Business Type', value: `${site.constitution} Firm` },
  { label: 'GSTIN', value: site.gstin },
  { label: 'PAN', value: site.pan },
  { label: 'Jurisdiction', value: site.jurisdiction },
  { label: 'Principal Office', value: 'Matrusri Nagar, Miyapur' },
  { label: 'Service area', value: 'Hyderabad & Rangareddy' },
  { label: 'Working hours', value: site.hours },
]

export default function AboutSection() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[3fr_2fr] gap-12 xl:gap-16 items-start">
      {/* Text column */}
      <div>
        <h2 className="font-serif text-[var(--color-slate-900)] mb-6"
          style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', lineHeight: '1.15', letterSpacing: '-0.01em' }}
        >
          About Shraddha Group
        </h2>

        <div className="space-y-5 text-[var(--color-slate-600)] text-[1rem] leading-[1.65] max-w-[65ch]">
          <p>
            Shraddha Group is a premier civil contracting and development firm based in Matrusri Nagar, Miyapur, Hyderabad. Founded with a straightforward purpose: deliver civil construction and landmark high-rise developments on the agreed date, at the agreed cost, with materials that pass testing. Our focus is unwavering on structural integrity and transparent execution — from iconic residential communities and commercial complexes to industrial warehousing.
          </p>
          <p>
            We build residential blocks, office buildings, warehouses, factories, and individual homes. Our site supervisors are employed directly, not subcontracted, which means someone who answers to us is on site every working day. Materials are sourced from established suppliers and tested to IS standards; test certificates are available on request for every major input.
          </p>
          <p>
            Progress is reported in writing every week — what was done, what is planned, what is pending. If a decision from the client is needed, we say so by Tuesday so the following week&apos;s programme isn&apos;t held up. Handover includes an itemised defects list, a 12-month liability period, and contact details for a supervisor who remains reachable.
          </p>
          <p>
            We do not bid for work we cannot execute. Before accepting a project, we assess our current workload, the programme, and the complexity of the site. If we cannot take it on without compromising existing commitments, we will say so.
          </p>
        </div>

        <Link
          href="/about"
          className="inline-flex items-center gap-2 mt-8 text-[var(--color-brass-dark)] font-600 text-[0.9375rem] hover:gap-3 transition-all"
          id="about-read-more"
        >
          Read more about the firm
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>

      {/* Credentials column */}
      <div className="credentials-list">
        <div className="px-5 py-4 border-b border-[var(--color-rule)] bg-[var(--color-concrete)]">
          <p className="font-sans font-600 text-[0.8125rem] tracking-[0.05em] uppercase text-[var(--color-slate-600)]">
            Registration &amp; credentials
          </p>
        </div>
        <dl>
          {credentials.map(({ label, value }, i) => (
            <div
              key={label}
              className={`flex flex-col px-5 py-4 ${i < credentials.length - 1 ? 'border-b border-[var(--color-rule)]' : ''}`}
            >
              <dt className="text-[0.75rem] font-600 uppercase tracking-[0.06em] text-[var(--color-slate-400)] mb-0.5">
                {label}
              </dt>
              <dd className="text-[0.9375rem] font-500 text-[var(--color-slate-900)]">
                {value}
              </dd>
            </div>
          ))}
        </dl>
        <div className="p-4 bg-[var(--color-concrete)]/60 border-t border-[var(--color-rule)]">
          <Link
            href="/about#certificates"
            className="inline-flex items-center gap-1.5 text-[0.875rem] font-600 text-[var(--color-brass-dark)] hover:text-[var(--color-slate-900)] transition-colors"
          >
            View Official PAN &amp; GST Certificates
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  )
}
