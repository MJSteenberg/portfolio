import React from 'react'

type IconConfig = {
  src: string
  alt: string
}

type Props = {
  rating?: string
  reviewCount?: string
  icons?: IconConfig[]
  className?: string
}

export function TestimonialBadge({
  rating = '4.9',
  reviewCount = '1366 reviews',
  icons = [],
  className = ''
}: Props): React.ReactElement {
  return (
    <div
      className={`inline-flex items-center gap-3 rounded-full bg-black/40 px-4 py-2 text-xs font-semibold tracking-tight text-white backdrop-blur ${className}`}
    >
      <span className="flex items-center gap-1">
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-amber-400">
          <path d="M12 2.5l2.7 6.05 6.55.52-5 4.33 1.5 6.37L12 16.9l-5.75 2.87 1.5-6.37-5-4.33 6.55-.52z" />
        </svg>
        <span className="text-sm">{rating}/5</span>
      </span>
      <span className="text-[0.7rem] uppercase tracking-[0.3em] text-white/70">{reviewCount}</span>

      {icons.length > 0 && (
        <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1">
          {icons.map((icon) => (
            <img key={icon.alt} src={icon.src} alt={icon.alt} className="h-4 w-4 object-contain" />
          ))}
        </span>
      )}
    </div>
  )
}

