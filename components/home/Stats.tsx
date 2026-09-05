const stats = [
  { value: '120+', label: 'Projects completed' },
  { value: '100%', label: 'Written timeline commitment' },
  { value: '4.2L sq ft', label: 'Built-up area delivered' },
  { value: '60+', label: 'Repeat clients' },
]

export default function Stats() {
  return (
    <section
      className="hero-animate hero-animate-delay-3 bg-[var(--color-slate-900)] py-10 md:py-12"
      aria-label="Key statistics"
    >
      <div className="container">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 md:gap-x-8">
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className={`flex flex-col ${i < 3 ? 'md:border-r md:border-[var(--color-slate-800)]' : ''} md:pr-8`}
            >
              <dt
                className="tabular-nums font-serif font-700 text-[var(--color-paper)] mb-1"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.1' }}
              >
                {value}
              </dt>
              <dd className="text-[var(--color-slate-400)] text-[0.8125rem] font-500 uppercase tracking-[0.05em]">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
