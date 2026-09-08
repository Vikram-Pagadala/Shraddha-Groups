'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from '@/components/ui/Lightbox'

interface ProjectGalleryProps {
  images: string[]
  title: string
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  if (!images || images.length === 0) return null

  return (
    <>
      <div
        className="grid grid-cols-2 md:grid-cols-3 gap-3"
        role="list"
        aria-label={`Photo gallery for ${title}`}
      >
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i)}
            className="group relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50/50 w-full cursor-zoom-in p-2 md:p-3"
            aria-label={`View image ${i + 1} of ${images.length}`}
            role="listitem"
          >
            <Image
              src={src}
              alt={`${title} — construction photograph ${i + 1}`}
              width={1000}
              height={1000}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 50vw"
              className="w-full h-auto object-contain rounded-md transition-transform duration-500 group-hover:scale-[1.02] shadow-sm"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors pointer-events-none rounded-xl" />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  )
}
