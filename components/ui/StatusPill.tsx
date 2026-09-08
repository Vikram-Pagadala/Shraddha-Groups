interface StatusPillProps {
  status: 'completed' | 'ongoing'
}

export default function StatusPill({ status }: StatusPillProps) {
  if (status === 'ongoing') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-black/50 border border-white/20 text-white text-[0.75rem] font-600 tracking-wide backdrop-blur-sm">
        <span
          className="w-1.5 h-1.5 rounded-full bg-[var(--color-brass)] group-hover:bg-emerald-400 transition-colors duration-300 animate-pulse"
          aria-hidden="true"
        />
        Ongoing
      </span>
    )
  }
  return (
    <span className="pill-completed">
      Completed
    </span>
  )
}
