import Link from 'next/link'
import Image from 'next/image'
import { type Project } from '@/content/projects'
import StatusPill from '@/components/ui/StatusPill'
import { ShieldCheck, Tag, Sparkles } from 'lucide-react'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group card flex flex-col hover:border-[var(--color-brass)] transition-all duration-300 hover:shadow-xl bg-[var(--color-paper)] overflow-hidden rounded-md border border-[var(--color-rule)]"
      id={`project-card-${project.slug}`}
    >
      {/* 16:10 cover image */}
      <div className="relative w-full overflow-hidden bg-slate-900" style={{ paddingBottom: '62.5%' }}>
        <Image
          src={project.cover}
          alt={`${project.title} — ${project.type.toLowerCase()} project in ${project.location}`}
          fill
          sizes="(min-width: 1280px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
        
        {/* Status pill overlay */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
          <StatusPill status={project.status} />
          {project.approvals && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[0.7rem] font-600 bg-emerald-950/85 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
              <ShieldCheck size={12} />
              HMDA & RERA Approved
            </span>
          )}
        </div>

        {/* Pricing badge on image */}
        {project.pricing?.offerPrice && (
          <div className="absolute bottom-3 right-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[0.75rem] font-700 bg-[var(--color-brass)] text-[var(--color-slate-900)] shadow-lg font-mono tracking-tight">
              <Tag size={12} />
              Offer: {project.pricing.offerPrice}
            </span>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6">
        {project.tagline && (
          <p className="text-[0.75rem] font-600 uppercase tracking-wider text-[var(--color-brass-dark)] mb-1">
            {project.tagline}
          </p>
        )}
        <h3
          className="font-serif font-700 text-[var(--color-slate-900)] mb-2 group-hover:text-[var(--color-brass-dark)] transition-colors"
          style={{ fontSize: '1.25rem', lineHeight: '1.3' }}
        >
          {project.title}
        </h3>
        <p className="text-[var(--color-slate-600)] text-[0.875rem] mb-3">
          {project.type} · {project.location}
        </p>

        {project.builtUpArea && (
          <p className="text-[var(--color-slate-500)] text-[0.8125rem] mb-4">
            {project.builtUpArea}
            {project.floors ? ` · ${project.floors}` : ''}
          </p>
        )}

        {/* Key Highlights preview */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-auto pt-4 border-t border-[var(--color-rule)]">
            <ul className="space-y-1.5 mb-4">
              {project.highlights.slice(0, 3).map((hl, idx) => (
                <li key={idx} className="flex items-center gap-2 text-[0.78125rem] text-[var(--color-slate-600)]">
                  <Sparkles size={13} className="text-[var(--color-brass)] shrink-0" />
                  <span className="truncate">{hl}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.status === 'ongoing' && project.progress !== undefined && (
          <div className="mt-2">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-[0.75rem] text-[var(--color-slate-400)] font-500">Construction Status</span>
              <span className="text-[0.75rem] text-[var(--color-slate-700)] font-700 tabular-nums">
                {project.progress}% Complete
              </span>
            </div>
            <div className="progress-track h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="progress-fill h-full bg-[var(--color-brass)]" style={{ width: `${project.progress}%` }} />
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}

