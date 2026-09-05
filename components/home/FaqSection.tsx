'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { site } from '@/content/site'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <div className="max-w-[800px] mx-auto">
      <div className="text-center mb-10">
        <h2
          className="font-serif text-[var(--color-slate-900)] mb-3"
          style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', lineHeight: '1.15', letterSpacing: '-0.01em' }}
        >
          Frequently Asked Questions
        </h2>
        <p className="text-[var(--color-slate-600)] text-[1rem] leading-[1.65]">
          Clear, honest answers on our civil contracting, pricing models, and project delivery across Hyderabad.
        </p>
      </div>

      <div className="divide-y divide-[var(--color-rule)] border-y border-[var(--color-rule)]">
        {site.faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div key={faq.question} className="py-5">
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between text-left gap-4 group"
              >
                <span className="font-serif font-700 text-[1.125rem] text-[var(--color-slate-900)] group-hover:text-[var(--color-brass-dark)] transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-[var(--color-brass-dark)] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              {isOpen && (
                <div className="mt-3 text-[var(--color-slate-600)] text-[0.9375rem] leading-[1.7] pr-8">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
