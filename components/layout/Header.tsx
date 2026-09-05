'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Menu } from 'lucide-react'
import { site } from '@/content/site'
import MobileDrawer from './MobileDrawer'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeDrawer = useCallback(() => setDrawerOpen(false), [])

  // Detect if hero is present on the page (home page)
  const isHome = pathname === '/'
  const transparent = isHome && !scrolled

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 h-[72px] flex items-center transition-all duration-300 ${
          transparent
            ? 'bg-transparent'
            : 'bg-[var(--color-slate-900)]'
        } ${scrolled ? 'shadow-[var(--shadow-header)]' : ''}`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Shraddha Group — Home" className="flex items-center gap-3">
            <img
              src="/Photos/FullLogo_Transparent_NoBuffer.png"
              alt="Shraddha Group"
              className="h-10 sm:h-11 w-auto brightness-0 invert object-contain"
              width={200}
              height={65}
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-3 py-1 text-[0.9375rem] font-500 transition-colors ${
                    isActive
                      ? 'text-[var(--color-brass)]'
                      : 'text-[var(--color-paper)] hover:text-[var(--color-brass)]'
                  }`}
                >
                  {label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-[var(--color-brass)] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            {/* Phone button — number on desktop, icon on mobile */}
            <a
              href={`tel:${site.phone}`}
              id="header-call-btn"
              className="flex items-center gap-2 px-4 py-2 rounded-[4px] bg-[var(--color-brass)] text-[var(--color-slate-900)] font-600 text-[0.9375rem] hover:bg-[var(--color-brass-dark)] transition-colors"
              aria-label={`Call us at ${site.phone}`}
            >
              <Phone size={16} aria-hidden="true" />
              <span className="hidden xl:inline">{site.phone}</span>
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={drawerOpen}
              aria-controls="mobile-drawer"
              className="xl:hidden p-2 text-[var(--color-paper)] hover:text-[var(--color-brass)] transition-colors rounded"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer open={drawerOpen} onClose={closeDrawer} />
    </>
  )
}
