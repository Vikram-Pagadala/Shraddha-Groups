import React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  label?: string          // The rotated margin annotation text
  id?: string
  children: React.ReactNode
  className?: string
  bg?: 'paper' | 'concrete' | 'slate'
  noPaddingTop?: boolean
  noPaddingBottom?: boolean
}

const bgMap = {
  paper: 'bg-[var(--color-paper)]',
  concrete: 'bg-[var(--color-concrete)]',
  slate: 'bg-[var(--color-slate-900)] text-[var(--color-paper)]',
}

export default function Section({
  label,
  id,
  children,
  className,
  bg = 'paper',
  noPaddingTop,
  noPaddingBottom,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative',
        bgMap[bg],
        !noPaddingTop && 'pt-16 md:pt-24',
        !noPaddingBottom && 'pb-16 md:pb-24',
        className,
      )}
    >
      {/* Desktop margin rule + label wrapper */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block" aria-hidden="true">
        <div className="container relative h-full">
          {/* Vertical brass line placed exactly in the middle of the 48px left padding gutter */}
          <div className="absolute top-0 bottom-0 left-[24px] w-[2px] bg-[var(--color-brass)]" />
          
          {/* Rotated section label */}
          {label && (
            <span
              className="absolute top-[4rem] flex items-start"
              style={{
                left: '2px', // Next to the line
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
                fontSize: '0.6875rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                color: 'var(--color-brass)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              {label}
            </span>
          )}
        </div>
      </div>

      {/* Mobile: horizontal brass mark above content */}
      {label && (
        <div className="container xl:hidden mb-2">
          <span className="section-mark" aria-hidden="true" />
        </div>
      )}

      <div className="container relative z-10">{children}</div>
    </section>
  )
}
