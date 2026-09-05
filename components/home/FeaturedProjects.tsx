import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getFeaturedProjects } from '@/content/projects'
import ProjectCard from '@/components/projects/ProjectCard'

export default function FeaturedProjects() {
  const projects = getFeaturedProjects()

  return (
    <>
      <div className="flex items-baseline justify-between mb-10 gap-4">
        <h2 className="font-serif text-[var(--color-slate-900)]"
          style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', lineHeight: '1.15', letterSpacing: '-0.01em' }}
        >
          Selected projects
        </h2>
        <Link
          href="/projects"
          className="shrink-0 inline-flex items-center gap-1.5 text-[0.9375rem] font-600 text-[var(--color-brass-dark)] hover:gap-3 transition-all"
          id="featured-all-projects"
        >
          All projects
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  )
}
