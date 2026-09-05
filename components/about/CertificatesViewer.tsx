'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FileCheck, ShieldCheck, Eye } from 'lucide-react'
import Lightbox from '@/components/ui/Lightbox'
import { site } from '@/content/site'

const documents = [
  {
    id: 'gst',
    title: 'GST Registration Certificate',
    form: 'Form GST REG-06',
    authority: 'Government of India / Government of Telangana',
    number: site.gstin,
    label: 'GSTIN',
    issueDate: '09/05/2023',
    jurisdiction: site.jurisdiction,
    type: 'Regular Taxpayer',
    image: '/Photos/gst.jpeg',
  },
  {
    id: 'pan',
    title: 'Permanent Account Number Card',
    form: 'Income Tax Department',
    authority: 'Government of India',
    number: site.pan,
    label: 'PAN',
    issueDate: '24/03/2023',
    jurisdiction: 'Corporate / Partnership PAN',
    type: 'Partnership Entity',
    image: '/Photos/Pan.jpeg',
  },
]

export default function CertificatesViewer() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const docImages = documents.map((d) => d.image)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {documents.map((doc, idx) => (
          <div
            key={doc.id}
            className="bg-[var(--color-paper)] border border-[var(--color-rule)] rounded-[4px] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            {/* Document Header */}
            <div className="p-5 border-b border-[var(--color-rule)] bg-[var(--color-concrete)]/60 flex items-start justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[var(--color-brass)]/15 text-[var(--color-brass-dark)] text-[0.75rem] font-600 uppercase tracking-[0.05em] mb-2">
                  <ShieldCheck size={14} className="text-[var(--color-brass-dark)]" />
                  Verified Government Record
                </div>
                <h3 className="font-serif font-700 text-[1.125rem] text-[var(--color-slate-900)]">
                  {doc.title}
                </h3>
                <p className="text-[0.8125rem] text-[var(--color-slate-500)] mt-0.5">
                  {doc.form} · {doc.authority}
                </p>
              </div>
              <FileCheck size={28} className="text-[var(--color-brass)] shrink-0 mt-1" />
            </div>

            {/* Document Preview & Details */}
            <div className="p-5 grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-5 items-center flex-1">
              {/* Clickable Thumbnail */}
              <button
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className="group relative aspect-[3/4] w-full rounded border border-[var(--color-rule)] overflow-hidden bg-slate-100 cursor-zoom-in block shadow-inner"
                aria-label={`View full resolution ${doc.title}`}
              >
                <Image
                  src={doc.image}
                  alt={doc.title}
                  fill
                  sizes="140px"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[var(--color-slate-900)]/0 group-hover:bg-[var(--color-slate-900)]/30 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-[0.75rem] font-500 px-2 py-1 rounded flex items-center gap-1">
                    <Eye size={12} /> Click to view
                  </span>
                </div>
              </button>

              {/* Document Key Attributes */}
              <div className="space-y-3 text-[0.875rem]">
                <div>
                  <span className="text-[0.75rem] font-600 uppercase tracking-wider text-[var(--color-slate-400)] block">
                    {doc.label} Number
                  </span>
                  <span className="font-mono font-700 text-[1.0625rem] text-[var(--color-slate-900)]">
                    {doc.number}
                  </span>
                </div>

                <div>
                  <span className="text-[0.75rem] font-600 uppercase tracking-wider text-[var(--color-slate-400)] block">
                    Legal Name
                  </span>
                  <span className="font-500 text-[var(--color-slate-800)]">
                    {site.legalName}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[var(--color-rule)]">
                  <div>
                    <span className="text-[0.6875rem] uppercase text-[var(--color-slate-400)] block">Date</span>
                    <span className="text-[0.8125rem] font-500 text-[var(--color-slate-700)]">{doc.issueDate}</span>
                  </div>
                  <div>
                    <span className="text-[0.6875rem] uppercase text-[var(--color-slate-400)] block">Type</span>
                    <span className="text-[0.8125rem] font-500 text-[var(--color-slate-700)]">{doc.type}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  className="inline-flex items-center gap-1.5 text-[var(--color-brass-dark)] hover:text-[var(--color-slate-900)] text-[0.8125rem] font-600 pt-1 transition-colors"
                >
                  <Eye size={14} /> Open Full Resolution Document
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={docImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  )
}
