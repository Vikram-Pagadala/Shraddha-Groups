interface StatusPillProps {
  status: 'completed' | 'ongoing'
}

export default function StatusPill({ status }: StatusPillProps) {
  if (status === 'ongoing') {
    return (
      <span className="pill-ongoing">
        <span
          className="w-1.5 h-1.5 rounded-full bg-[var(--color-brass)] animate-pulse"
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
