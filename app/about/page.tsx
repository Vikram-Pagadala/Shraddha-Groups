import type { Metadata } from 'next'
import { Award, Shield, Users, Wrench } from 'lucide-react'
import Section from '@/components/layout/Section'
import Button from '@/components/ui/Button'
import { site } from '@/content/site'
import CertificatesViewer from '@/components/about/CertificatesViewer'

export const metadata: Metadata = {
  title: 'About Us — Real Estate Marketing in Hyderabad',
  description:
    'About Shraddha Group — a professionally driven real-estate marketing company based in Hyderabad, specializing in open plots, villas, and apartments.',
  alternates: {
    canonical: '/about',
  },
}

const certifications = [
  { label: 'Brand Name', value: 'Shraddha Group' },
  { label: 'Registered Entity', value: `${site.legalName} (${site.constitution} Firm)` },
  { label: 'GSTIN', value: site.gstin },
  { label: 'PAN', value: site.pan },
  { label: 'Tax Jurisdiction', value: site.jurisdiction },
  { label: 'Date of Incorporation', value: '24 March 2023' },
  { label: 'Principal Office', value: `${site.address.line1}, ${site.address.line2}, Hyderabad — ${site.address.pin}` },
  { label: 'Service area', value: 'Hyderabad, Secunderabad & Rangareddy district' },
  { label: 'Working hours', value: site.hours },
]

const localities = [
  'Miyapur', 'Tellapur', 'Kollur', 'Bowrampet', 'Matrusri Nagar', 'Kondapur', 'Gachibowli', 'Madhapur',
  'Kukatpally', 'Nallagandla', 'Chandanagar', 'Patancheru', 'Banjara Hills',
  'Jubilee Hills', 'Hitec City', 'Manikonda', 'Narsingi', 'Secunderabad',
]

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-[var(--color-slate-900)] pt-[72px]">
        <div className="container py-16">
          <h1
            className="font-serif text-[var(--color-paper)]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: '1.1', letterSpacing: '-0.01em' }}
          >
            About Shraddha Group
          </h1>
        </div>
      </div>

      {/* History */}
      <Section label="History" id="history" bg="paper">
        <div className="grid grid-cols-1 xl:grid-cols-[3fr_2fr] gap-12 xl:gap-16">
          <div className="space-y-5 text-[var(--color-slate-600)] text-[1rem] leading-[1.65] max-w-[65ch]">
            <h2 className="font-serif text-[var(--color-slate-900)] mb-6"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: '1.15', letterSpacing: '-0.01em' }}
            >
              Connecting people with the right property.
            </h2>
            <p>
              <strong>Shraddha Group</strong> is a professionally driven real-estate marketing company based in Hyderabad, specializing in the marketing and promotion of apartments, villas, and open-plot developments across Hyderabad.
            </p>
            <p>
              Our approach is built on a simple principle: understand the project, communicate its value clearly, and connect it with the right customers. We work closely with developers and project partners to bring quality residential opportunities to the market through strategic marketing, customer engagement, and dedicated sales support.
            </p>
            <p>
              From premium apartment communities and thoughtfully planned villas to group housing projects and open-plot developments, we represent a diverse portfolio of properties suited to different lifestyles, budgets, and investment objectives.
            </p>
            <p>
              Our team focuses on providing customers with clear project information, responsive assistance, site-visit coordination, and end-to-end support throughout the property selection and booking journey. We believe that informed customers make confident decisions, and transparency remains at the heart of every interaction.
            </p>
            <p>
              We do not simply market properties. We build visibility for projects, create meaningful customer connections, and help turn property opportunities into successful transactions.
            </p>
            <p>
              At Shraddha Group, our vision is to become a trusted name in real-estate marketing by bringing together credible projects, strategic marketing, and the right buyers.
            </p>
          </div>

          {/* Credentials */}
          <div className="credentials-list">
            <div className="px-5 py-4 border-b border-[var(--color-rule)] bg-[var(--color-concrete)]">
              <p className="font-sans font-600 text-[0.8125rem] tracking-[0.05em] uppercase text-[var(--color-slate-600)]">
                Registrations &amp; credentials
              </p>
            </div>
            <dl>
              {certifications.map(({ label, value }, i) => (
                <div
                  key={label}
                  className={`flex flex-col px-5 py-4 ${i < certifications.length - 1 ? 'border-b border-[var(--color-rule)]' : ''}`}
                >
                  <dt className="text-[0.75rem] font-600 uppercase tracking-[0.06em] text-[var(--color-slate-400)] mb-0.5">{label}</dt>
                  <dd className="text-[0.9375rem] font-500 text-[var(--color-slate-900)]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>



      {/* Statutory Certifications */}
      <Section label="Verification" id="certificates" bg="paper">
        <div className="mb-10">
          <h2
            className="font-serif text-[var(--color-slate-900)] mb-3"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: '1.15', letterSpacing: '-0.01em' }}
          >
            Statutory Registrations &amp; Verified Documents
          </h2>
          <p className="text-[var(--color-slate-600)] text-[1rem] leading-[1.65] max-w-[65ch]">
            Shraddha Group operates under full statutory transparency and legal compliance through its government-registered entity Shraddha Enterprises. All works are invoiced with valid GST credits, and all contracts are executed under our government-registered partnership deed. Review our official tax certificates below:
          </p>
        </div>
        <CertificatesViewer />
      </Section>

      {/* Service area */}
      <Section label="Coverage" id="coverage" bg="concrete">
        <div className="max-w-[800px]">
          <h2 className="font-serif text-[var(--color-slate-900)] mb-6"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: '1.15', letterSpacing: '-0.01em' }}
          >
            Service area
          </h2>
          <p className="text-[var(--color-slate-600)] text-[1rem] leading-[1.65] mb-8 max-w-[55ch]">
            We take on projects across Hyderabad, Secunderabad, and Rangareddy district from our office in Matrusri Nagar, Miyapur. This keeps our supervisors close enough to visit any site same-day if required.
          </p>
          <div className="flex flex-wrap gap-2">
            {localities.map((loc) => (
              <span
                key={loc}
                className="px-3 py-1.5 bg-[var(--color-concrete)] border border-[var(--color-rule)] rounded-[4px] text-[0.875rem] font-500 text-[var(--color-slate-700)]"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section label="" id="about-cta" bg="slate" noPaddingTop noPaddingBottom>
        <div className="py-24 text-center">
          <div className="inline-flex flex-col items-center justify-center p-10 md:p-14 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-[var(--color-brass)]/40 shadow-2xl backdrop-blur-sm mx-4">
            <h2 className="font-serif text-[var(--color-paper)] mb-8 tracking-tight"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: '1.2' }}
            >
              Ready to discuss a project?
            </h2>
            <Button href="/contact" variant="primary" size="lg" id="about-contact-cta" className="shadow-lg font-600 transition-transform hover:scale-105">
              Send us your requirement
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
