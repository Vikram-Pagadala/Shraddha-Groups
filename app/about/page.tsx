import type { Metadata } from 'next'
import { Award, Shield, Users, Wrench } from 'lucide-react'
import Section from '@/components/layout/Section'
import Button from '@/components/ui/Button'
import { site } from '@/content/site'
import CertificatesViewer from '@/components/about/CertificatesViewer'

export const metadata: Metadata = {
  title: 'About Us — Civil Contracting & Development in Hyderabad',
  description:
    'About Shraddha Group — registered civil contractors and developers based in Matrusri Nagar, Miyapur, Hyderabad. Company credentials, GST/PAN registration, quality policy, and execution standards.',
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
              Registered civil contractors &amp; developers, built on transparent execution.
            </h2>
            <p>
              Shraddha Group is a premier civil contracting and development firm based in Matrusri Nagar, Miyapur, Hyderabad. Operating under the government-registered entity Shraddha Enterprises, our founding principle is simple: accept only work that can be done well and on time, and report progress honestly — good news and bad.
            </p>
            <p>
              Today we carry out landmark high-rise residential communities (including Vian Vayu and Vian Mrida), commercial complexes, industrial warehousing, and renovation projects across Hyderabad and Rangareddy district. Our site engineers and supervisors are employed directly. We use established material suppliers whose test certificates we check, and we run structured weekly progress reporting on every project.
            </p>
            <p>
              We have never missed a structural milestone date without advance notice to the client. Where delays have occurred — soil problems, rain, delayed client approvals — we have communicated them early, quantified the impact, and proposed a recovery programme.
            </p>
            <p>
              We do not attempt to be the cheapest contractor in the market. We attempt to be the most reliable one within a reasonable cost bracket, and to produce work that a structural engineer would sign off on without hesitation.
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

      {/* What we stand for */}
      <Section label="Standards" id="standards" bg="concrete">
        <h2 className="font-serif text-[var(--color-slate-900)] mb-10"
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: '1.15', letterSpacing: '-0.01em' }}
        >
          What we will not compromise on
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            {
              icon: Award,
              title: 'Materials',
              body: 'Fe500D TMT bars, IS-grade cement, IS-grade aggregate. No substitutions without written client consent and a test certificate.',
            },
            {
              icon: Shield,
              title: 'Structural integrity',
              body: 'Structural drawings reviewed or prepared by a qualified engineer. No verbal approvals on structural changes.',
            },
            {
              icon: Users,
              title: 'Direct supervision',
              body: 'Our own supervisors — not labour contractors — on site every working day. You have one point of contact.',
            },
            {
              icon: Wrench,
              title: 'Defect liability',
              body: '12 months on all structural and waterproofing works. Accessible team for the entire period.',
            },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="card p-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-[4px] bg-[var(--color-concrete)] mb-5">
                <Icon size={20} className="text-[var(--color-brass)]" aria-hidden="true" />
              </div>
              <h3 className="font-serif font-700 text-[var(--color-slate-900)] mb-2"
                style={{ fontSize: '1.0625rem' }}
              >
                {title}
              </h3>
              <p className="text-[var(--color-slate-600)] text-[0.9375rem] leading-[1.6]">{body}</p>
            </div>
          ))}
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
        <div className="py-20 text-center">
          <p className="font-serif text-[var(--color-paper)] mb-6"
            style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', lineHeight: '1.2' }}
          >
            Ready to discuss a project?
          </p>
          <Button href="/contact" variant="primary" size="lg" id="about-contact-cta">
            Send us your requirement
          </Button>
        </div>
      </Section>
    </>
  )
}
