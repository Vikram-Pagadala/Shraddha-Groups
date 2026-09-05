import Link from 'next/link'
import { Home, Building2, Wrench, ClipboardList, ArrowRight } from 'lucide-react'

const serviceIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Home,
  Building2,
  Wrench,
  ClipboardList,
}

const servicesData = [
  {
    icon: 'Home',
    title: 'Residential Construction',
    description: 'Individual houses, row houses and apartment blocks built from foundation to handover.',
    href: '/services#residential-construction',
  },
  {
    icon: 'Building2',
    title: 'Commercial & Industrial',
    description: 'Office buildings, retail complexes, warehouses and manufacturing facilities.',
    href: '/services#commercial-industrial',
  },
  {
    icon: 'Wrench',
    title: 'Renovation & Interiors',
    description: 'Full or partial renovation of existing buildings with minimal disruption.',
    href: '/services#renovation-interiors',
  },
  {
    icon: 'ClipboardList',
    title: 'Project Management',
    description: 'Independent oversight and cost control for owner-managed construction projects.',
    href: '/services#project-management',
  },
]

export default function ServicesGrid() {
  return (
    <>
      <h2 className="font-serif text-[var(--color-slate-900)] mb-10"
        style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', lineHeight: '1.15', letterSpacing: '-0.01em' }}
      >
        What we build
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-px bg-[var(--color-rule)] border border-[var(--color-rule)] rounded-[4px] overflow-hidden">
        {servicesData.map(({ icon, title, description, href }) => {
          const Icon = serviceIcons[icon]
          return (
            <Link
              key={icon}
              href={href}
              className="group bg-[var(--color-paper)] p-6 flex flex-col hover:bg-[var(--color-concrete)] transition-colors"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-[4px] bg-[var(--color-concrete)] group-hover:bg-[var(--color-paper)] mb-5 transition-colors">
                <Icon size={20} className="text-[var(--color-brass)]" aria-hidden="true" />
              </div>
              <h3 className="font-serif font-700 text-[var(--color-slate-900)] mb-2"
                style={{ fontSize: '1.125rem', lineHeight: '1.25' }}
              >
                {title}
              </h3>
              <p className="text-[var(--color-slate-600)] text-[0.9375rem] leading-[1.6] flex-1">
                {description}
              </p>
              <span className="inline-flex items-center gap-1.5 mt-5 text-[0.8125rem] font-600 text-[var(--color-brass-dark)] group-hover:gap-2.5 transition-all">
                Learn more
                <ArrowRight size={14} aria-hidden="true" />
              </span>
            </Link>
          )
        })}
      </div>
    </>
  )
}
