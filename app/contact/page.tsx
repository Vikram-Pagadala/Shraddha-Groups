import type { Metadata } from 'next'
import ContactForm from '@/components/contact/ContactForm'
import ContactDetails from '@/components/contact/ContactDetails'
import MapEmbed from '@/components/contact/MapEmbed'

export const metadata: Metadata = {
  title: 'Contact Civil Contractors & Developers in Hyderabad & Rangareddy',
  description:
    'Contact Shraddha Group at our office in Matrusri Nagar, Miyapur. Request a site visit, submit project drawings, or get a transparent construction quotation.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-[var(--color-slate-900)] pt-[72px]">
        <div className="container py-14">
          <h1
            className="font-serif text-[var(--color-paper)] mb-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: '1.1', letterSpacing: '-0.01em' }}
          >
            Contact us
          </h1>
          <p className="text-[var(--color-slate-400)] text-[1.0625rem] max-w-[50ch] leading-[1.65]">
            Describe your project and we will call back within one working day.
          </p>
        </div>
      </div>

      <div className="container py-14">
        <div className="grid grid-cols-1 xl:grid-cols-[3fr_2fr] gap-12 xl:gap-16 items-start">
          {/* Form */}
          <div>
            <h2 className="font-serif font-700 text-[var(--color-slate-900)] mb-7"
              style={{ fontSize: '1.375rem', lineHeight: '1.2' }}
            >
              Send us your requirement
            </h2>
            <ContactForm />
          </div>

          {/* Details sidebar */}
          <div className="space-y-6">
            <ContactDetails />
            <MapEmbed />
          </div>
        </div>
      </div>
    </>
  )
}
