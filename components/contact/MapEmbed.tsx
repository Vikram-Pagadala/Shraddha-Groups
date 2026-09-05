import { site } from '@/content/site'

export default function MapEmbed() {
  if (!site.mapEmbedUrl || site.mapEmbedUrl.includes('[FILL]')) {
    return (
      <div
        className="w-full h-[280px] flex items-center justify-center bg-[var(--color-concrete)] border border-[var(--color-rule)] rounded-[4px] text-[var(--color-slate-400)] text-[0.9375rem]"
        aria-label="Map placeholder — embed URL not configured"
      >
        Map embed — add Google Maps URL to content/site.ts
      </div>
    )
  }

  return (
    <div className="w-full rounded-[4px] overflow-hidden border border-[var(--color-rule)]">
      <iframe
        src={site.mapEmbedUrl}
        width="100%"
        height="280"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Shraddha Group office location"
        aria-label="Google Map showing office location"
      />
    </div>
  )
}
