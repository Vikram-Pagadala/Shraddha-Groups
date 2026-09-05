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
            className="group relative overflow-hidden rounded-[0px] aspect-[4/3] block w-full cursor-zoom-in"
            aria-label={`View image ${i + 1} of ${images.length}`}
            role="listitem"
          >
            <Image
              src={src}
              alt={`${title} — construction photograph ${i + 1}`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[var(--color-slate-900)]/0 group-hover:bg-[var(--color-slate-900)]/20 transition-colors" />
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
