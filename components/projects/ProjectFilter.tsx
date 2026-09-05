'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { projects } from '@/content/projects'

const tabs = [
  { value: 'all', label: 'All' },
  { value: 'completed', label: 'Completed' },
  { value: 'ongoing', label: 'Ongoing' },
] as const

type TabValue = 'all' | 'completed' | 'ongoing'

export default function ProjectFilter() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const current = (searchParams.get('status') ?? 'all') as TabValue

  const counts = {
    all: projects.length,
    completed: projects.filter((p) => p.status === 'completed').length,
    ongoing: projects.filter((p) => p.status === 'ongoing').length,
  }

  const setFilter = (value: TabValue) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value === 'all') {
      params.delete('status')
    } else {
      params.set('status', value)
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <div
      role="tablist"
      aria-label="Filter projects by status"
      className="flex items-center gap-1 p-1 bg-[var(--color-concrete)] border border-[var(--color-rule)] rounded-[4px] w-fit"
    >
      {tabs.map(({ value, label }) => {
        const isActive = current === value
        return (
          <button
            key={value}
            role="tab"
            aria-selected={isActive}
            id={`filter-tab-${value}`}
            onClick={() => setFilter(value)}
            className={`flex items-center gap-2 px-4 py-2 rounded-[2px] text-[0.9375rem] font-500 transition-colors ${
              isActive
                ? 'bg-[var(--color-slate-900)] text-[var(--color-paper)]'
                : 'text-[var(--color-slate-600)] hover:text-[var(--color-slate-900)] hover:bg-[var(--color-rule)]'
            }`}
          >
            {label}
            <span
              className={`tabular-nums text-[0.75rem] px-1.5 py-0.5 rounded-sm font-600 ${
                isActive
                  ? 'bg-[var(--color-brass)] text-[var(--color-slate-900)]'
                  : 'bg-[var(--color-rule)] text-[var(--color-slate-600)]'
              }`}
            >
              {counts[value]}
            </span>
          </button>
        )
      })}
    </div>
  )
}
