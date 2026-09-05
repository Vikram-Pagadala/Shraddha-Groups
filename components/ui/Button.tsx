import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: Variant
  size?: Size
  href?: string
  children: React.ReactNode
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  id?: string
  'aria-label'?: string
}

const baseStyles =
  'inline-flex items-center justify-center font-sans font-600 transition-colors duration-150 cursor-pointer border rounded-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brass)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none'

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-[var(--color-brass)] text-[var(--color-slate-900)] border-[var(--color-brass)] hover:bg-[var(--color-brass-dark)] hover:border-[var(--color-brass-dark)]',
  secondary:
    'bg-transparent text-[var(--color-slate-900)] border-[var(--color-slate-900)] hover:bg-[var(--color-slate-900)] hover:text-[var(--color-paper)]',
  ghost:
    'bg-transparent text-[var(--color-brass-dark)] border-transparent hover:underline hover:border-transparent',
}

const sizeStyles: Record<Size, string> = {
  sm: 'text-[0.8125rem] px-3.5 py-1.5 gap-1.5',
  md: 'text-[0.9375rem] px-5 py-2.5 gap-2',
  lg: 'text-[1rem] px-6 py-3 gap-2',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className,
  disabled,
  type = 'button',
  onClick,
  id,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className)

  if (href) {
    return (
      <Link href={href} className={classes} id={id} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      id={id}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
