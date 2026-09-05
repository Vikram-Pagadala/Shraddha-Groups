'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { type Project } from '@/content/projects'
import ProjectFilter from '@/components/projects/ProjectFilter'
import ProjectCard from '@/components/projects/ProjectCard'

interface ProjectFilterWrapperProps {
  projects: Project[]
}

export default function ProjectFilterWrapper({ projects }: ProjectFilterWrapperProps) {
  const searchParams = useSearchParams()
  const status = searchParams.get('status') as 'completed' | 'ongoing' | null

  const filtered = status ? projects.filter((p) => p.status === status) : projects

  return (
    <>
      <div className="mb-8">
        <ProjectFilter />
      </div>

      {filtered.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-[var(--color-slate-600)] text-[1rem] mb-4">
            No {status} projects listed right now.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[var(--color-brass-dark)] font-600 hover:gap-3 transition-all"
          >
            See completed work
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      ) : (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
          role="list"
          aria-live="polite"
          aria-label="Project listing"
        >
          {filtered.map((project) => (
            <div key={project.slug} role="listitem">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      )}
    </>
  )
}
