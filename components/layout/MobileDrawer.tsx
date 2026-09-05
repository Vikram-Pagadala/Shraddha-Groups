'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X, Phone, MessageCircle } from 'lucide-react'
import { site } from '@/content/site'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

interface MobileDrawerProps {
  open: boolean
  onClose: () => void
}

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const pathname = usePathname()
  const firstFocusRef = useRef<HTMLButtonElement>(null)
  const drawerRef = useRef<HTMLDivElement>(null)

  // Close on route change
  useEffect(() => {
    onClose()
  }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, onClose])

  // Focus trap
  useEffect(() => {
    if (!open) return
    firstFocusRef.current?.focus()

    const drawer = drawerRef.current
    if (!drawer) return
    const focusable = drawer.querySelectorAll<HTMLElement>(
      'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }

    drawer.addEventListener('keydown', trap)
    return () => drawer.removeEventListener('keydown', trap)
  }, [open])

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-[var(--color-slate-900)]/70 z-40 xl:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer panel */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 bottom-0 w-[min(320px,90vw)] bg-[var(--color-paper)] z-50 xl:hidden flex flex-col transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-[72px] border-b border-[var(--color-rule)]">
          <Link href="/" onClick={onClose} aria-label="Shraddha Group — Home">
            <img
              src="/Photos/FullLogo_Transparent_NoBuffer.png"
              alt="Shraddha Group"
              className="h-8 w-auto object-contain"
              width={140}
              height={46}
            />
          </Link>
          <button
            ref={firstFocusRef}
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 -mr-2 text-[var(--color-slate-600)] hover:text-[var(--color-slate-900)] transition-colors rounded"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links */}
        <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto py-8 px-6">
          <ul className="space-y-1" role="list">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`flex items-center px-3 py-3.5 rounded text-[1rem] font-500 transition-colors ${
                      isActive
                        ? 'text-[var(--color-brass-dark)] font-600 bg-[var(--color-concrete)]'
                        : 'text-[var(--color-slate-900)] hover:bg-[var(--color-concrete)]'
                    }`}
                  >
                    {label}
                    {isActive && (
                      <span className="ml-auto w-1 h-1 rounded-full bg-[var(--color-brass)]" aria-hidden="true" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Contact actions */}
        <div className="p-6 border-t border-[var(--color-rule)] space-y-3">
          <a
            href={`tel:${site.phone}`}
            className="flex items-center gap-3 w-full px-4 py-3 rounded border border-[var(--color-slate-900)] text-[var(--color-slate-900)] font-500 text-[0.9375rem] hover:bg-[var(--color-slate-900)] hover:text-[var(--color-paper)] transition-colors"
          >
            <Phone size={16} />
            {site.phone}
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 w-full px-4 py-3 rounded bg-[#25D366] text-white font-500 text-[0.9375rem] hover:bg-[#20BD5A] transition-colors"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}
