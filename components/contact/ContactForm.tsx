'use client'

import { useState, useRef, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { site } from '@/content/site'

type FormState = 'idle' | 'submitting' | 'error'

interface FieldError {
  name?: string
  phone?: string
  email?: string
  projectType?: string
  location?: string
  message?: string
  consent?: string
}

interface FormData {
  name: string
  phone: string
  email: string
  projectType: string
  location: string
  budget: string
  message: string
  consent: boolean
  company: string // honeypot
}

function validateForm(data: FormData): FieldError {
  const errors: FieldError = {}

  if (!data.name.trim() || data.name.trim().length < 2 || data.name.trim().length > 80) {
    errors.name = 'Enter your full name (2–80 characters).'
  }

  const phoneDigits = data.phone.replace(/\D/g, '').replace(/^91/, '')
  if (!phoneDigits || phoneDigits.length !== 10) {
    errors.phone = 'Enter a 10-digit mobile number so we can call you back.'
  }

  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email address (or leave this blank).'
  }

  if (!data.projectType) {
    errors.projectType = 'Select the type of project.'
  }

  if (!data.location.trim()) {
    errors.location = 'Enter the site city or locality.'
  }

  if (!data.message.trim() || data.message.trim().length < 10) {
    errors.message = 'Describe your project in at least 10 characters.'
  }

  if (data.message.trim().length > 1500) {
    errors.message = 'Please keep your message under 1500 characters.'
  }

  if (!data.consent) {
    errors.consent = 'Please confirm you agree to be contacted.'
  }

  return errors
}

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-[0.9375rem] font-500 text-[var(--color-slate-900)]"
      >
        {label}
        {required && <span className="text-[var(--color-brass-dark)] ml-1" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-[0.8125rem] text-red-600 font-500"
        >
          {error}
        </p>
      )}
    </div>
  )
}

const inputClass = (error?: string) =>
  `w-full px-4 py-2.5 border rounded-[4px] text-[0.9375rem] text-[var(--color-slate-900)] placeholder:text-[var(--color-slate-400)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brass)] focus:border-transparent transition-colors ${
    error
      ? 'border-red-500 bg-red-50'
      : 'border-[var(--color-rule)] bg-[var(--color-paper)] hover:border-[var(--color-slate-400)]'
  }`

export default function ContactForm() {
  const router = useRouter()
  const renderedAt = useRef(Date.now())
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [fieldErrors, setFieldErrors] = useState<FieldError>({})

  const [data, setData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    location: '',
    budget: '',
    message: '',
    consent: false,
    company: '',
  })

  const update = (key: keyof FormData, value: string | boolean) => {
    setData((prev) => ({ ...prev, [key]: value }))
    // Clear field error on change
    if (fieldErrors[key as keyof FieldError]) {
      setFieldErrors((prev) => ({ ...prev, [key]: undefined }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const errors = validateForm(data)
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      // Focus first errored field
      const firstErrorId = Object.keys(errors)[0]
      document.getElementById(firstErrorId)?.focus()
      return
    }

    setFormState('submitting')
    setErrorMsg('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          renderedAt: renderedAt.current,
          source: 'website',
        }),
      })

      const result = await response.json()

      if (result.ok) {
        router.push('/contact/thank-you')
      } else {
        throw new Error(result.error || 'Server error')
      }
    } catch {
      setFormState('error')
      setErrorMsg(
        `Couldn't send that. Please call ${site.phone} or try again.`,
      )
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Enquiry form"
      className="space-y-6"
    >
      {/* Honeypot — must stay empty */}
      <input
        type="text"
        name="company"
        id="company"
        value={data.company}
        onChange={(e) => update('company', e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', opacity: 0, width: 1, height: 1 }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field id="name" label="Full name" required error={fieldErrors.name}>
          <input
            type="text"
            id="name"
            name="name"
            value={data.name}
            onChange={(e) => update('name', e.target.value)}
            autoComplete="name"
            required
            aria-required="true"
            aria-describedby={fieldErrors.name ? 'name-error' : undefined}
            className={inputClass(fieldErrors.name)}
          />
        </Field>

        <Field id="phone" label="Phone" required error={fieldErrors.phone}>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={data.phone}
            onChange={(e) => update('phone', e.target.value)}
            autoComplete="tel"
            required
            aria-required="true"
            aria-describedby={fieldErrors.phone ? 'phone-error' : undefined}
            placeholder="+91 98490 00000"
            className={inputClass(fieldErrors.phone)}
          />
        </Field>
      </div>

      <Field id="email" label="Email" error={fieldErrors.email}>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={(e) => update('email', e.target.value)}
          autoComplete="email"
          aria-describedby={fieldErrors.email ? 'email-error' : undefined}
          className={inputClass(fieldErrors.email)}
        />
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field id="projectType" label="Project type" required error={fieldErrors.projectType}>
          <select
            id="projectType"
            name="projectType"
            value={data.projectType}
            onChange={(e) => update('projectType', e.target.value)}
            required
            aria-required="true"
            aria-describedby={fieldErrors.projectType ? 'projectType-error' : undefined}
            className={inputClass(fieldErrors.projectType)}
          >
            <option value="">Select a type</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Open plots">Open plots</option>
            <option value="Other">Other</option>
          </select>
        </Field>

        <Field id="location" label="Site location" required error={fieldErrors.location}>
          <input
            type="text"
            id="location"
            name="location"
            value={data.location}
            onChange={(e) => update('location', e.target.value)}
            required
            aria-required="true"
            aria-describedby={fieldErrors.location ? 'location-error' : undefined}
            placeholder="City or locality"
            className={inputClass(fieldErrors.location)}
          />
        </Field>
      </div>

      <Field id="budget" label="Approximate budget">
        <select
          id="budget"
          name="budget"
          value={data.budget}
          onChange={(e) => update('budget', e.target.value)}
          className={inputClass()}
        >
          <option value="">Not decided</option>
          <option value="₹25L–50L">₹25L–50L</option>
          <option value="₹50L–1Cr">₹50L–1Cr</option>
          <option value="₹1Cr–1.50Cr">₹1Cr–1.50Cr</option>
          <option value="₹2Cr and above">₹2Cr and above</option>
        </select>
      </Field>

      <Field id="message" label="Message" required error={fieldErrors.message}>
        <textarea
          id="message"
          name="message"
          value={data.message}
          onChange={(e) => update('message', e.target.value)}
          required
          aria-required="true"
          aria-describedby={fieldErrors.message ? 'message-error' : undefined}
          rows={5}
          maxLength={1500}
          placeholder="Tell us about the project — location, size, requirements, timeline…"
          className={`resize-y min-h-[120px] ${inputClass(fieldErrors.message)}`}
        />
        <p className="text-[0.75rem] text-[var(--color-slate-400)] text-right tabular-nums">
          {data.message.length} / 1500
        </p>
      </Field>

      {/* Consent */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={data.consent}
            onChange={(e) => update('consent', e.target.checked)}
            required
            aria-required="true"
            aria-describedby={fieldErrors.consent ? 'consent-error' : undefined}
            className="mt-0.5 w-4 h-4 rounded border-[var(--color-rule)] text-[var(--color-brass)] focus:ring-[var(--color-brass)]"
          />
          <label htmlFor="consent" className="text-[0.9375rem] text-[var(--color-slate-600)] leading-[1.5]">
            I agree to be contacted about this enquiry.{' '}
            <a href="/privacy" className="text-[var(--color-brass-dark)] underline hover:no-underline">
              Privacy policy
            </a>
          </label>
        </div>
        {fieldErrors.consent && (
          <p id="consent-error" role="alert" className="text-[0.8125rem] text-red-600 font-500 ml-7">
            {fieldErrors.consent}
          </p>
        )}
      </div>

      {/* Error message */}
      {formState === 'error' && (
        <div
          role="alert"
          aria-live="polite"
          className="px-4 py-3 bg-red-50 border border-red-200 rounded-[4px] text-[0.9375rem] text-red-700"
        >
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={formState === 'submitting'}
        id="contact-form-submit"
        className="w-full sm:w-auto px-7 py-3 bg-[var(--color-brass)] text-[var(--color-slate-900)] font-600 text-[0.9375rem] rounded-[4px] hover:bg-[var(--color-brass-dark)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brass)] focus-visible:ring-offset-2"
      >
        {formState === 'submitting' ? 'Sending…' : 'Send enquiry'}
      </button>
    </form>
  )
}
