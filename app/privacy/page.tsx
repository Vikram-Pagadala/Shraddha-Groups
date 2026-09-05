import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/content/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Shraddha Group — how we collect and use your personal data.',
}

export default function PrivacyPage() {
  const year = new Date().getFullYear()

  return (
    <>
      <div className="bg-[var(--color-slate-900)] pt-[72px]">
        <div className="container py-14">
          <h1 className="font-serif text-[var(--color-paper)]"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: '1.1', letterSpacing: '-0.01em' }}
          >
            Privacy Policy
          </h1>
          <p className="text-[var(--color-slate-400)] text-[0.9375rem] mt-2">
            Last updated: {year}
          </p>
        </div>
      </div>

      <div className="container py-14">
        <article className="prose max-w-[65ch] text-[var(--color-slate-600)] space-y-8 text-[1rem] leading-[1.7]">
          <section>
            <h2 className="font-serif font-700 text-[var(--color-slate-900)] mb-3" style={{ fontSize: '1.375rem' }}>
              Who we are
            </h2>
            <p>
              Shraddha Group is a civil contracting and development firm based in Hyderabad, Telangana (operating under the registered partnership entity Shraddha Enterprises). This privacy policy explains how we collect, use, and protect personal data submitted through this website.
            </p>
            <p>Office address: {site.address.full}</p>
            <p>Contact: <a href={`mailto:${site.email}`} className="text-[var(--color-brass-dark)] underline">{site.email}</a></p>
          </section>

          <section>
            <h2 className="font-serif font-700 text-[var(--color-slate-900)] mb-3" style={{ fontSize: '1.375rem' }}>
              What data we collect
            </h2>
            <p>When you submit the contact form, we collect:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Your name</li>
              <li>Your mobile phone number</li>
              <li>Your email address (optional)</li>
              <li>Project type, location and budget range</li>
              <li>Your message</li>
              <li>Timestamp and approximate IP country</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif font-700 text-[var(--color-slate-900)] mb-3" style={{ fontSize: '1.375rem' }}>
              How we use it
            </h2>
            <p>We use your contact details solely to respond to your construction enquiry. We do not sell, rent, or share your data with any third party. We do not use it for marketing without your explicit consent.</p>
            <p>Submitted data is stored in a private Google Sheet accessible only to Shraddha Group personnel.</p>
          </section>

          <section>
            <h2 className="font-serif font-700 text-[var(--color-slate-900)] mb-3" style={{ fontSize: '1.375rem' }}>
              Retention
            </h2>
            <p>We retain enquiry records for up to 3 years, in case a project discussed by phone requires follow-up. You may request deletion at any time by emailing us.</p>
          </section>

          <section>
            <h2 className="font-serif font-700 text-[var(--color-slate-900)] mb-3" style={{ fontSize: '1.375rem' }}>
              Your rights
            </h2>
            <p>You have the right to access, correct or request deletion of any personal data we hold about you. Email us at <a href={`mailto:${site.email}`} className="text-[var(--color-brass-dark)] underline">{site.email}</a> with &ldquo;Privacy request&rdquo; in the subject line.</p>
          </section>

          <section>
            <h2 className="font-serif font-700 text-[var(--color-slate-900)] mb-3" style={{ fontSize: '1.375rem' }}>
              Cookies
            </h2>
            <p>This site does not use marketing or tracking cookies. If analytics are enabled, we use anonymised data (Vercel Analytics or Google Analytics 4) that does not identify individual users.</p>
          </section>
        </article>

        <p className="mt-10 text-[0.9375rem]">
          <Link href="/" className="text-[var(--color-brass-dark)] font-600 hover:underline">
            ← Back to home
          </Link>
        </p>
      </div>
    </>
  )
}
