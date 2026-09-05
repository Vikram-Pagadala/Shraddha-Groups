import type { Metadata } from 'next'
import { Suspense } from 'react'
import { projects } from '@/content/projects'
import ProjectFilterWrapper from './ProjectFilterWrapper'

export const metadata: Metadata = {
  title: 'Development & Construction Projects in Hyderabad',
  description:
    'Browse landmark high-rise residential communities and ongoing developments by Shraddha Group across Hyderabad & Rangareddy — featuring Vian Vayu and Vian Mrida.',
  alternates: {
    canonical: '/projects',
  },
}

export default function ProjectsPage() {
  const completedCount = projects.filter((p) => p.status === 'completed').length
  const ongoingCount = projects.filter((p) => p.status === 'ongoing').length

  return (
    <>
      {/* Page header */}
      <div className="bg-[var(--color-slate-900)] pt-[72px]">
        <div className="container py-16">
          <h1
            className="font-serif text-[var(--color-paper)] mb-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: '1.1', letterSpacing: '-0.01em' }}
          >
            Projects
          </h1>
          <p className="text-[var(--color-slate-400)] text-[1.0625rem] max-w-[52ch] leading-[1.65]">
            {ongoingCount} active ongoing {ongoingCount === 1 ? 'development' : 'developments'}
            {completedCount > 0 ? ` · ${completedCount} completed` : ''}
          </p>
        </div>
      </div>

      <div className="container py-12">
        <Suspense fallback={null}>
          <ProjectFilterWrapper projects={projects} />
        </Suspense>
      </div>
    </>
  )
}
