import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { site } from '@/content/site'

const pages = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

const services = [
  { href: '/services#residential-construction', label: 'Residential Construction' },
  { href: '/services#commercial-industrial', label: 'Commercial & Industrial' },
  { href: '/services#renovation-interiors', label: 'Renovation & Interiors' },
  { href: '/services#project-management', label: 'Project Management' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-slate-900)] text-[var(--color-paper)]">
      {/* Main grid */}
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
          {/* Brand block */}
          <div className="xl:col-span-1">
            <Link href="/" aria-label="Shraddha Group — Home">
              <img
                src="/Photos/FullLogo_Transparent_NoBuffer.png"
                alt="Shraddha Group"
                className="h-12 w-auto brightness-0 invert mb-5 object-contain"
                width={180}
                height={59}
              />
            </Link>
            <p className="text-[var(--color-slate-400)] text-[0.9375rem] leading-[1.65] max-w-[240px]">
              Civil contracting &amp; premium developments across Hyderabad &amp; Rangareddy.
            </p>
            <div className="mt-5 space-y-1.5 text-[var(--color-slate-400)] text-[0.8125rem]">
              <p>
                <span className="text-[var(--color-rule)]">GSTIN:</span>{' '}
                <span className="font-500 text-[var(--color-paper)]">{site.gstin}</span>
              </p>
              <p>
                <span className="text-[var(--color-rule)]">PAN:</span>{' '}
                <span className="font-500 text-[var(--color-paper)]">{site.pan}</span>
              </p>
              <p>
                <span className="text-[var(--color-rule)]">Entity:</span>{' '}
                <span className="font-500 text-[var(--color-paper)]">{site.constitution} Firm ({site.legalName})</span>
              </p>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-sans font-600 text-[0.8125rem] tracking-[0.06em] uppercase text-[var(--color-slate-400)] mb-5">
              Pages
            </h3>
            <ul className="space-y-3" role="list">
              {pages.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[0.9375rem] text-[var(--color-concrete)] hover:text-[var(--color-brass)] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans font-600 text-[0.8125rem] tracking-[0.06em] uppercase text-[var(--color-slate-400)] mb-5">
              Services
            </h3>
            <ul className="space-y-3" role="list">
              {services.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[0.9375rem] text-[var(--color-concrete)] hover:text-[var(--color-brass)] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans font-600 text-[0.8125rem] tracking-[0.06em] uppercase text-[var(--color-slate-400)] mb-5">
              Contact
            </h3>
            <ul className="space-y-4" role="list">
              <li className="flex gap-3 items-start">
                <MapPin size={16} className="text-[var(--color-brass)] mt-0.5 shrink-0" aria-hidden="true" />
                <address className="not-italic text-[0.9375rem] text-[var(--color-concrete)] leading-[1.5]">
                  {site.address.line1},<br />
                  {site.address.line2},<br />
                  {site.address.city} — {site.address.pin}
                </address>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-[var(--color-brass)] shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${site.phone}`}
                  className="text-[0.9375rem] text-[var(--color-concrete)] hover:text-[var(--color-brass)] transition-colors"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-[var(--color-brass)] shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${site.email}`}
                  className="text-[0.9375rem] text-[var(--color-concrete)] hover:text-[var(--color-brass)] transition-colors"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Clock size={16} className="text-[var(--color-brass)] shrink-0" aria-hidden="true" />
                <span className="text-[0.9375rem] text-[var(--color-concrete)]">{site.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-slate-800)]">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.8125rem] text-[var(--color-slate-400)]">
          <p>© {year} Shraddha Group. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="hover:text-[var(--color-concrete)] transition-colors"
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true">·</span>
            <span>Built to deliver on time.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
