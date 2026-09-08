import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { site } from '@/content/site'

const pages = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-slate-900)] text-[var(--color-paper)]">
      {/* Main grid */}
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand block */}
          <div className="md:col-span-1">
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
        <div className="container py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-[0.8125rem] text-[var(--color-slate-400)] text-center">
          <div className="md:w-1/3 md:text-left">
            <p>© {year} Shraddha Group. All rights reserved.</p>
          </div>
          <div className="md:w-1/3 md:text-center">
            <p>
              {String.fromCharCode(68, 101, 118, 101, 108, 111, 112, 101, 100, 32, 97, 110, 100, 32, 77, 97, 105, 110, 116, 97, 105, 110, 101, 100, 32, 98, 121)}{' '}
              <a
                href={String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 119, 119, 119, 46, 108, 105, 110, 107, 101, 100, 105, 110, 46, 99, 111, 109, 47, 105, 110, 47, 118, 105, 107, 114, 97, 109, 112, 97, 103, 97, 100, 97, 108, 97, 47)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-concrete)] transition-colors underline underline-offset-2"
              >
                {String.fromCharCode(86, 105, 107, 114, 97, 109, 32, 80, 97, 103, 97, 100, 97, 108, 97)}
              </a>
              .
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end items-center gap-4">
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
