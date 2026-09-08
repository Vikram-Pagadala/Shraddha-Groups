import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { site } from '@/content/site'

const credentials = [
  { label: 'Business Type', value: `${site.constitution} Firm` },
  { label: 'GSTIN', value: site.gstin },
  { label: 'PAN', value: site.pan },
  { label: 'Jurisdiction', value: site.jurisdiction },
  { label: 'Principal Office', value: 'Matrusri Nagar, Miyapur' },
  { label: 'Service area', value: 'in farm service area :: Hyderabad, Telangana' },
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
            Shraddha Group is a professionally driven real-estate marketing company focused on connecting customers with carefully selected open plots, villas, and apartment projects across Hyderabad.
          </p>
          <p>
            We work closely with reputed developers and project partners to bring thoughtfully planned residential opportunities to the market. Our role goes beyond traditional property marketing — we focus on understanding each project, identifying its unique value, and presenting the right opportunities to the right customers.
          </p>
          <p>
            With a strong understanding of the local real-estate landscape, our marketing approach combines strategic positioning, digital outreach, customer engagement, and transparent communication. From generating awareness to guiding prospective buyers through their property journey, we strive to make every interaction professional, informed, and trustworthy.
          </p>
          <p>
            Our portfolio encompasses a diverse range of residential opportunities, from well-planned open-plot communities to premium villas and apartment developments. We aim to make quality real estate more accessible by connecting customers with projects that match their aspirations, requirements, and investment goals.
          </p>
          <p>
            At Shraddha Group, we believe great real estate deserves great representation. We market with purpose, connect with trust, and create value by bringing exceptional projects and the right customers together.
          </p>
          <p className="font-600 text-[var(--color-slate-900)] mt-2">
            Shraddha Group — Connecting People with the Right Property.
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
