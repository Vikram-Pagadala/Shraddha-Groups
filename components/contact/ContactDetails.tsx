import Link from 'next/link'
import { MapPin, Phone, MessageCircle, Mail, Clock, ArrowRight } from 'lucide-react'
import { site } from '@/content/site'

export default function ContactDetails() {
  return (
    <div className="credentials-list">
      <div className="px-5 py-4 border-b border-[var(--color-rule)] bg-[var(--color-concrete)]">
        <p className="font-sans font-600 text-[0.8125rem] tracking-[0.05em] uppercase text-[var(--color-slate-600)]">
          Get in touch
        </p>
      </div>

      <div className="divide-y divide-[var(--color-rule)]">
        {/* Address */}
        <div className="px-5 py-4 flex gap-3 items-start">
          <MapPin size={16} className="text-[var(--color-brass)] mt-0.5 shrink-0" aria-hidden="true" />
          <div>
            <p className="text-[0.75rem] font-600 uppercase tracking-[0.06em] text-[var(--color-slate-400)] mb-1">Office</p>
            <address className="not-italic text-[0.9375rem] font-500 text-[var(--color-slate-900)] leading-[1.5]">
              {site.address.line1},<br />
              {site.address.line2},<br />
              {site.address.city} — {site.address.pin}
            </address>
          </div>
        </div>

        {/* Phone */}
        <div className="px-5 py-4 flex gap-3 items-center">
          <Phone size={16} className="text-[var(--color-brass)] shrink-0" aria-hidden="true" />
          <div>
            <p className="text-[0.75rem] font-600 uppercase tracking-[0.06em] text-[var(--color-slate-400)] mb-1">Phone</p>
            <a
              href={`tel:${site.phone}`}
              className="text-[0.9375rem] font-500 text-[var(--color-slate-900)] hover:text-[var(--color-brass-dark)] transition-colors"
            >
              {site.phone}
            </a>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="px-5 py-4 flex gap-3 items-center">
          <MessageCircle size={16} className="text-[#25D366] shrink-0" aria-hidden="true" />
          <div>
            <p className="text-[0.75rem] font-600 uppercase tracking-[0.06em] text-[var(--color-slate-400)] mb-1">WhatsApp</p>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.9375rem] font-500 text-[var(--color-slate-900)] hover:text-[var(--color-brass-dark)] transition-colors"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="px-5 py-4 flex gap-3 items-center">
          <Mail size={16} className="text-[var(--color-brass)] shrink-0" aria-hidden="true" />
          <div>
            <p className="text-[0.75rem] font-600 uppercase tracking-[0.06em] text-[var(--color-slate-400)] mb-1">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="text-[0.9375rem] font-500 text-[var(--color-slate-900)] hover:text-[var(--color-brass-dark)] transition-colors"
            >
              {site.email}
            </a>
          </div>
        </div>

        {/* Hours */}
        <div className="px-5 py-4 flex gap-3 items-center">
          <Clock size={16} className="text-[var(--color-brass)] shrink-0" aria-hidden="true" />
          <div>
            <p className="text-[0.75rem] font-600 uppercase tracking-[0.06em] text-[var(--color-slate-400)] mb-1">Hours</p>
            <p className="text-[0.9375rem] font-500 text-[var(--color-slate-900)]">{site.hours}</p>
          </div>
        </div>

        {/* Statutory Tax Details */}
        <div className="px-5 py-4 bg-[var(--color-concrete)]/50">
          <p className="text-[0.75rem] font-600 uppercase tracking-[0.06em] text-[var(--color-slate-600)] mb-2">Registration &amp; Tax Info</p>
          <div className="space-y-1.5 text-[0.875rem] text-[var(--color-slate-700)]">
            <p><span className="font-600 text-[var(--color-slate-900)]">GSTIN:</span> {site.gstin}</p>
            <p><span className="font-600 text-[var(--color-slate-900)]">PAN:</span> {site.pan}</p>
            <p><span className="font-600 text-[var(--color-slate-900)]">Entity:</span> {site.constitution} Firm</p>
            <p><span className="font-600 text-[var(--color-slate-900)]">Jurisdiction:</span> {site.jurisdiction}</p>
          </div>
          <Link
            href="/about#certificates"
            className="inline-flex items-center gap-1 mt-3 text-[0.8125rem] font-600 text-[var(--color-brass-dark)] hover:text-[var(--color-slate-900)] transition-colors"
          >
            View Official PAN &amp; GST Documents
            <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  )
}
