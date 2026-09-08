import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  ChevronRight,
  ChevronLeft,
  CheckSquare,
  ShieldCheck,
  Tag,
  CalendarCheck,
  Building2,
  Sparkles,
  Layers,
  ArrowRight,
  PhoneCall,
  Car,
} from 'lucide-react'
import { projects, getProjectBySlug } from '@/content/projects'
import { formatDate } from '@/lib/utils'
import StatusPill from '@/components/ui/StatusPill'
import ProjectGallery from '@/components/projects/ProjectGallery'
import Button from '@/components/ui/Button'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: 'Project Not Found' }

  const projectUrl = `/projects/${project.slug}`
  const projectDesc = `${project.tagline ? `${project.tagline}. ` : ''}${project.title} — ${project.type} development in ${project.location}, delivered by Shraddha Group in collaboration with VIAN PROPERTIES. HMDA & RERA Approved.`

  return {
    title: `${project.title} — ${project.location}`,
    description: projectDesc,
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      title: `${project.title} | Shraddha Group`,
      description: projectDesc,
      url: projectUrl,
      images: [
        {
          url: project.cover ?? '/Photos/FullLogo_Transparent_NoBuffer.png',
          width: 1200,
          height: 800,
          alt: project.title,
        },
      ],
    },
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const projectIndex = projects.findIndex((p) => p.slug === slug)
  const prev = projects[projectIndex - 1]
  const next = projects[projectIndex + 1]

  const facts = [
    { label: 'Developer / Execution', value: project.client },
    { label: 'Location', value: project.location },
    { label: 'Project Type', value: project.type },
    ...(project.builtUpArea ? [{ label: 'Configurations & Area', value: project.builtUpArea }] : []),
    ...(project.floors ? [{ label: 'Structure & Elevation', value: project.floors }] : []),
    ...(project.approvals?.hmda ? [{ label: 'HMDA Approval No.', value: project.approvals.hmda }] : []),
    ...(project.approvals?.rera ? [{ label: 'RERA Registration No.', value: project.approvals.rera }] : []),
    ...(project.startDate ? [{ label: 'Commencement', value: formatDate(project.startDate) }] : []),
    ...(project.endDate ? [{ label: 'Completion', value: formatDate(project.endDate) }] : []),
    ...(project.expectedCompletion
      ? [{ label: 'Expected Handover', value: formatDate(project.expectedCompletion) }]
      : []),
    { label: 'Status', value: project.status === 'completed' ? 'Completed' : 'Ongoing / Under Construction' },
    ...(project.progress !== undefined ? [{ label: 'Construction Progress', value: `${project.progress}% Complete` }] : []),
  ]

  return (
    <>
      {/* Hero / Header banner */}
      <div className="bg-[var(--color-slate-900)] pt-[72px] relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/5 pointer-events-none" />
        
        {/* Breadcrumbs */}
        <div className="container py-6 relative z-10">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-[0.8125rem] text-[var(--color-slate-400)]" role="list">
              <li>
                <Link href="/" className="hover:text-[var(--color-paper)] transition-colors">Home</Link>
              </li>
              <li aria-hidden="true"><ChevronRight size={12} /></li>
              <li>
                <Link href="/projects" className="hover:text-[var(--color-paper)] transition-colors">Projects</Link>
              </li>
              <li aria-hidden="true"><ChevronRight size={12} /></li>
              <li className="text-[var(--color-paper)] font-500" aria-current="page">{project.title}</li>
            </ol>
          </nav>
        </div>

        {/* Title & Tagline & Approvals */}
        <div className="container pb-14 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <StatusPill status={project.status} />
            {project.tagline && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.75rem] font-600 bg-amber-500/15 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                <Sparkles size={13} />
                {project.tagline}
              </span>
            )}
          </div>

          <h1
            className="font-serif text-[var(--color-paper)] mb-4 tracking-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.1' }}
          >
            {project.title}
          </h1>
          <p className="text-[var(--color-slate-300)] text-[1.125rem] max-w-2xl font-light mb-6">
            {project.type} Development · {project.location}
          </p>

          {/* Statutory Approvals Bar */}
          {project.approvals && (
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800/80">
              {project.approvals.hmda && (
                <div className="flex items-center gap-2.5 px-4 py-2 rounded-lg bg-slate-800/70 border border-slate-700/60 text-slate-200">
                  <ShieldCheck size={18} className="text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[0.6875rem] uppercase tracking-wider text-slate-400 block font-600">HMDA Approved</span>
                    <span className="font-mono text-[0.8125rem] font-600 text-emerald-300">{project.approvals.hmda}</span>
                  </div>
                </div>
              )}
              {project.approvals.rera && (
                <div className="flex items-center gap-2.5 px-4 py-2 rounded-lg bg-slate-800/70 border border-slate-700/60 text-slate-200">
                  <ShieldCheck size={18} className="text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[0.6875rem] uppercase tracking-wider text-slate-400 block font-600">TS RERA Registered</span>
                    <span className="font-mono text-[0.8125rem] font-600 text-emerald-300">{project.approvals.rera}</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Main content area */}
      <div className="container py-14">
        <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-12 xl:gap-16 items-start">
          {/* Left Column */}
          <div>
            {/* Promotional Video */}
            {project.video && (
              <div className="mb-12 rounded-xl overflow-hidden shadow-xl border border-[var(--color-rule)] bg-[var(--color-slate-900)]">
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  controls
                  playsInline
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Project Overview / Description */}
            <div className="mb-12">
              <h2 className="font-serif font-700 text-[var(--color-slate-900)] mb-5 text-[1.5rem]">
                Project Overview
              </h2>
              <div className="space-y-4 text-[var(--color-slate-700)] text-[1.03rem] leading-[1.7]">
                {project.description.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Project Highlights Grid */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mb-14 p-6 sm:p-8 rounded-xl bg-gradient-to-br from-amber-50/50 via-white to-slate-50 border border-amber-200/70 shadow-sm">
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-brass)]/20 flex items-center justify-center text-[var(--color-brass-dark)]">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h2 className="font-serif font-700 text-[var(--color-slate-900)] text-[1.35rem] leading-none">
                      Project Highlights & Specifications
                    </h2>
                    <p className="text-[0.8125rem] text-[var(--color-slate-500)] mt-1">
                      Engineered for luxurious scale, seamless ventilation, and grand architectural presence
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.highlights.map((hl, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-slate-200/80 shadow-xs hover:border-[var(--color-brass)] transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </div>
                      <span className="font-500 text-[0.9375rem] text-[var(--color-slate-800)]">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Smart Payment Plan Section (if available) */}
            {project.paymentPlan && project.paymentPlan.length > 0 && (
              <div className="mb-14 p-6 sm:p-8 rounded-xl bg-slate-900 text-slate-100 border border-slate-800 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-brass)] text-slate-950 flex items-center justify-center font-bold">
                    <CalendarCheck size={22} />
                  </div>
                  <div>
                    <span className="text-[0.75rem] uppercase tracking-wider text-amber-400 font-700">Flexible Investor Terms</span>
                    <h2 className="font-serif font-700 text-white text-[1.5rem] leading-none">
                      Smart Payment Plan
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {project.paymentPlan.map((stage, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-lg bg-slate-800/80 border border-slate-700 flex flex-col justify-between"
                    >
                      <div className="text-[1.75rem] font-bold font-mono text-amber-400 mb-2">
                        {stage.percentage}
                      </div>
                      <div>
                        <span className="text-[0.6875rem] uppercase tracking-wider text-slate-400 block font-600 mb-1">
                          Stage {idx + 1}
                        </span>
                        <p className="text-[0.9375rem] font-500 text-slate-100 leading-snug">
                          {stage.milestone}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pricing & Charges Breakdown Section (if available) */}
            {project.pricing && (
              <div className="mb-14 p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between flex-wrap gap-4 mb-6 pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-[var(--color-brass-dark)] flex items-center justify-center">
                      <Tag size={22} />
                    </div>
                    <div>
                      <h2 className="font-serif font-700 text-[var(--color-slate-900)] text-[1.4rem] leading-none">
                        Pricing & Charges Schedule
                      </h2>
                      {project.pricing.offerNote && (
                        <p className="text-[0.8125rem] text-amber-700 font-500 mt-1">
                          {project.pricing.offerNote}
                        </p>
                      )}
                    </div>
                  </div>

                  {project.pricing.offerPrice && (
                    <div className="px-4 py-2.5 rounded-lg bg-amber-500/15 border border-amber-500/30 text-right">
                      <span className="text-[0.6875rem] uppercase tracking-wider text-amber-800 font-700 block">
                        Offer Price
                      </span>
                      <span className="text-[1.25rem] font-bold text-[var(--color-slate-950)] font-mono">
                        {project.pricing.offerPrice}
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  {/* Base & Floor rise */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.pricing.basePrice && (
                      <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-[0.75rem] uppercase tracking-wider text-slate-400 font-600 block mb-1">
                          Base Price
                        </span>
                        <span className="text-[1.125rem] font-semibold text-slate-800">
                          {project.pricing.basePrice}
                        </span>
                      </div>
                    )}
                    {project.pricing.floorRise && (
                      <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-[0.75rem] uppercase tracking-wider text-slate-400 font-600 block mb-1">
                          Floor Rise Charges
                        </span>
                        <span className="text-[0.9375rem] font-semibold text-slate-800">
                          {project.pricing.floorRise}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Premiums */}
                  {project.pricing.premiums && project.pricing.premiums.length > 0 && (
                    <div>
                      <h3 className="text-[0.875rem] font-700 uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                        <Building2 size={16} className="text-[var(--color-brass)]" />
                        Preferred Location & Premium Charges
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.pricing.premiums.map((prem, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-3 rounded-lg border border-slate-100 bg-slate-50/70"
                          >
                            <span className="text-[0.875rem] font-500 text-slate-700">{prem.label}</span>
                            <span className="text-[0.875rem] font-bold text-slate-900 font-mono">{prem.amount}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Other charges & Parking */}
                  {(project.pricing.otherCharges || project.pricing.parking) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                      {project.pricing.otherCharges && (
                        <div>
                          <h3 className="text-[0.875rem] font-700 uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                            <Layers size={16} className="text-[var(--color-brass)]" />
                            Other Statutory & Amenities Charges
                          </h3>
                          <div className="space-y-2">
                            {project.pricing.otherCharges.map((item, idx) => (
                              <div
                                key={idx}
                                className="flex items-center justify-between p-3 rounded-lg border border-slate-100 bg-slate-50/70"
                              >
                                <span className="text-[0.875rem] font-500 text-slate-700">{item.label}</span>
                                <span className="text-[0.875rem] font-bold text-slate-900 font-mono">{item.amount}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {project.pricing.parking && (
                        <div>
                          <h3 className="text-[0.875rem] font-700 uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                            <Car size={16} className="text-[var(--color-brass)]" />
                            Parking Charges
                          </h3>
                          <div className="space-y-2">
                            {project.pricing.parking.map((item, idx) => (
                              <div
                                key={idx}
                                className="flex items-center justify-between p-3 rounded-lg border border-slate-100 bg-slate-50/70"
                              >
                                <span className="text-[0.875rem] font-500 text-slate-700">{item.label}</span>
                                <span className="text-[0.875rem] font-bold text-slate-900 font-mono">{item.amount}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Scope of work */}
            {project.scope && project.scope.length > 0 && (
              <div className="mb-14">
                <h2 className="font-serif font-700 text-[var(--color-slate-900)] mb-5 text-[1.4rem]">
                  Engineering & Project Features
                </h2>
                <ul className="space-y-3" role="list">
                  {project.scope.map((item) => (
                    <li key={item} className="flex items-start gap-3.5 text-[0.96875rem] text-[var(--color-slate-700)]">
                      <CheckSquare
                        size={18}
                        className="text-[var(--color-brass)] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Gallery */}
            {project.gallery.length > 0 && (
              <div className="mb-12">
                <h2 className="font-serif font-700 text-[var(--color-slate-900)] mb-5 text-[1.4rem]">
                  Floor Plans & Architectural Visuals
                </h2>
                <ProjectGallery images={project.gallery} title={project.title} />
              </div>
            )}
          </div>

          {/* Right Column: Sticky Facts Card */}
          <div className="xl:sticky xl:top-24 space-y-6">
            <div className="credentials-list rounded-xl overflow-hidden border border-[var(--color-rule)] bg-[var(--color-paper)] shadow-md">
              <div className="px-6 py-5 border-b border-[var(--color-rule)] bg-slate-900 text-white">
                <p className="font-sans font-700 text-[0.875rem] tracking-[0.06em] uppercase text-amber-400">
                  Project Factsheet
                </p>
                <p className="text-[0.8125rem] text-slate-300 mt-0.5">{project.title}</p>
              </div>
              <dl className="divide-y divide-[var(--color-rule)]">
                {facts.map(({ label, value }) => (
                  <div key={label} className="flex flex-col px-6 py-3.5 hover:bg-slate-50/80 transition-colors">
                    <dt className="text-[0.71875rem] font-700 uppercase tracking-[0.07em] text-[var(--color-slate-400)] mb-0.5">
                      {label}
                    </dt>
                    <dd className="text-[0.9375rem] font-600 text-[var(--color-slate-900)] tabular-nums">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="p-6 bg-slate-50 border-t border-[var(--color-rule)]">
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  className="w-full justify-center shadow-md font-600"
                  id="project-sidebar-cta"
                >
                  <PhoneCall size={16} />
                  Book a Site Visit / Enquiry
                </Button>
              </div>
            </div>

            {/* Download Brochure Card */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 shadow-md">
              <h3 className="font-serif font-700 text-lg mb-2 text-white">
                Require More Details?
              </h3>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                Connect with our advisory desk for comprehensive unit availability, floor layouts, and cost estimation sheets.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-600 text-sm transition-colors group"
              >
                <span>Request Project Brochure & Pricing</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 p-8 md:p-12 rounded-2xl bg-[var(--color-slate-900)] text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-amber-400 text-xs uppercase tracking-widest font-700 mb-2 block">
              Direct Developer Sales Desk
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">
              Interested in {project.title}?
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Schedule an exclusive consultation and on-site walkthrough with Shraddha Group engineers & property consultants.
            </p>
          </div>
          <div className="shrink-0">
            <Button href="/contact" variant="primary" size="lg" id="project-bottom-cta">
              Schedule Consultation
            </Button>
          </div>
        </div>

        {/* Prev / Next navigation */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between border-t border-[var(--color-rule)] pt-8">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="flex items-center gap-3 group text-[var(--color-slate-600)] hover:text-[var(--color-brass-dark)] transition-colors"
              id="prev-project"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform text-[var(--color-brass)]" aria-hidden="true" />
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.06em] font-600 mb-0.5 text-[var(--color-slate-400)]">Previous Project</p>
                <p className="font-600 text-[1rem] text-[var(--color-slate-900)]">{prev.title}</p>
              </div>
            </Link>
          ) : <div />}

          {next && (
            <Link
              href={`/projects/${next.slug}`}
              className="flex items-center gap-3 group text-right sm:text-right text-[var(--color-slate-600)] hover:text-[var(--color-brass-dark)] transition-colors ml-auto"
              id="next-project"
            >
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.06em] font-600 mb-0.5 text-[var(--color-slate-400)]">Next Project</p>
                <p className="font-600 text-[1rem] text-[var(--color-slate-900)]">{next.title}</p>
              </div>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform text-[var(--color-brass)]" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

