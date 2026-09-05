const steps = [
  {
    number: '01',
    title: 'Site visit and requirement study',
    description:
      'We visit the site, review any existing drawings, and understand the scope, constraints, and timeline.',
  },
  {
    number: '02',
    title: 'Estimate and drawings',
    description:
      'Detailed cost estimate with item rates, scope of work document, and, where needed, structural drawings.',
  },
  {
    number: '03',
    title: 'Agreement and schedule',
    description:
      'Signed contract with a milestone-based payment schedule and a written programme with committed dates.',
  },
  {
    number: '04',
    title: 'Execution with weekly reporting',
    description:
      'Our supervisors are on site daily. You receive a written progress report with photographs every week.',
  },
  {
    number: '05',
    title: 'Handover and defect liability',
    description:
      'Inspection, snag list, occupancy certificate assistance, and 12 months of defect liability.',
  },
]

export default function Process() {
  return (
    <>
      <h2 className="font-serif text-[var(--color-slate-900)] mb-12"
        style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', lineHeight: '1.15', letterSpacing: '-0.01em' }}
      >
        How we work
      </h2>

      {/* Horizontal rule spine */}
      <div className="relative">
        {/* The horizontal rule */}
        <div className="hidden xl:block absolute top-7 left-0 right-0 h-px bg-[var(--color-rule)]" aria-hidden="true" />

        <ol className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-8 xl:gap-6" role="list">
          {steps.map(({ number, title, description }) => (
            <li key={number} className="flex flex-col">
              {/* Number badge sits on the spine */}
              <div className="flex xl:flex-col items-start gap-4 xl:gap-0">
                <div
                  className="shrink-0 w-14 h-14 rounded-[4px] flex items-center justify-center bg-[var(--color-slate-900)] text-[var(--color-brass)] font-serif font-700 xl:mb-8 tabular-nums"
                  style={{ fontSize: '1.25rem', lineHeight: '1' }}
                  aria-hidden="true"
                >
                  {number}
                </div>

                <div className="xl:hidden flex-1">
                  <h3 className="font-serif font-700 text-[var(--color-slate-900)] mb-1.5"
                    style={{ fontSize: '1.0625rem', lineHeight: '1.3' }}
                  >
                    {title}
                  </h3>
                  <p className="text-[var(--color-slate-600)] text-[0.9375rem] leading-[1.6]">
                    {description}
                  </p>
                </div>
              </div>

              {/* Desktop title + description below */}
              <div className="hidden xl:block">
                <h3 className="font-serif font-700 text-[var(--color-slate-900)] mb-2"
                  style={{ fontSize: '1rem', lineHeight: '1.3' }}
                >
                  {title}
                </h3>
                <p className="text-[var(--color-slate-600)] text-[0.875rem] leading-[1.6]">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  )
}
