import React, { useRef } from 'react'
import sceneImage from '../assets/scene.webp'
import { SiteFooter } from '../portfolio/components/SiteFooter'
import { SiteHeader } from '../portfolio/components/SiteHeader'
import { TestimonialBadge } from '../portfolio/components/TestimonialBadge'

type Review = {
  name: string
  stars: number
  text: string
  date: string
  work: string
  verifyUrl?: string
}

const reviews: Review[] = [
  {
    name: 'Ava Price',
    stars: 5,
    date: 'Nov 2025',
    text: 'Normalized GA4 revenue, restored server events, and helped us hit a record ROAS.',
    work: 'Google Conversion Tracking',
    verifyUrl: 'https://www.linkedin.com/in/ava-price/'
  },
  {
    name: 'Liam Cross',
    stars: 5,
    date: 'Oct 2025',
    text: 'MJ rewired our tracking so Meta finally saw COD orders and conversion windows aligned.',
    work: 'Server API + Meta',
    verifyUrl: 'https://www.trustpilot.com/review/example.com/1'
  },
  {
    name: 'Zoe Patel',
    stars: 5,
    date: 'Sep 2025',
    text: 'Every platform now shows the same purchase numbers—budgeting is finally trustworthy.',
    work: 'Cross-platform Attribution',
    verifyUrl: 'https://www.linkedin.com/in/zoe-patel/'
  },
  {
    name: 'Noah Bennett',
    stars: 4,
    date: 'Aug 2025',
    text: 'The audit surfaced gaps we didn’t know existed and fixed them within days.',
    work: 'Tracking Audit'
  },
  {
    name: 'Maya Quinn',
    stars: 5,
    date: 'Jul 2025',
    text: 'Server-side events are rock-solid now, even through browser updates and ad blockers.',
    work: 'Server-side Tracking',
    verifyUrl: 'https://www.linkedin.com/in/maya-quinn/'
  },
  {
    name: 'Ethan Clarke',
    stars: 5,
    date: 'Jul 2025',
    text: 'The level of detail in MJ’s reports gave our finance team confidence again.',
    work: 'Reporting Playbooks',
    verifyUrl: 'https://www.linkedin.com/in/ethan-clarke/'
  },
  {
    name: 'Isla Morgan',
    stars: 4,
    date: 'Jun 2025',
    text: 'Split-testing attribution logic was handled cleanly and without downtime.',
    work: 'Experiment Tracking'
  },
  {
    name: 'Kai Reyes',
    stars: 5,
    date: 'May 2025',
    text: 'Clear communication, fast deployment, and a tracking stack that finally matches revenue.',
    work: 'Revenue Alignment',
    verifyUrl: 'https://www.linkedin.com/in/kai-reyes/'
  },
  {
    name: 'Sofia Kim',
    stars: 5,
    date: 'May 2025',
    text: 'MJ tuned our GA4 + Server API so we could stop guessing where spend was going.',
    work: 'GA4 + Server API',
    verifyUrl: 'https://www.google.com/maps?cid=987654321'
  },
  {
    name: 'Miles Carter',
    stars: 5,
    date: 'Apr 2025',
    text: 'Meta and Google Ads now attribute the same conversions. Campaign pacing is predictable.',
    work: 'Platform Alignment'
  },
  {
    name: 'Harper Flynn',
    stars: 5,
    date: 'Apr 2025',
    text: 'Amazing attention to detail—every event, property, and purchase is audited.',
    work: 'Data Layer Audit'
  },
  {
    name: 'Leo Duncan',
    stars: 4,
    date: 'Mar 2025',
    text: 'The journey from problem to fix happened faster than I expected.',
    work: 'Workflow Optimization'
  },
  {
    name: 'Chloe Grant',
    stars: 5,
    date: 'Mar 2025',
    text: 'Our attribution improved, and the data layer documentation is gold.',
    work: 'Documentation'
  },
  {
    name: 'Finnia Rose',
    stars: 5,
    date: 'Feb 2025',
    text: 'MJ gave us a blueprint to keep tracking accurate even through future platform resets.',
    work: 'Stability Planning'
  },
  {
    name: 'Micah Wade',
    stars: 5,
    date: 'Feb 2025',
    text: 'Server events now confirm every Shopify order with payment data. No more discrepancies.',
    work: 'Shopify Server Events'
  },
  {
    name: 'Lara Holt',
    stars: 5,
    date: 'Jan 2025',
    text: 'Calibrated our server-to-server flow so insights now reflect actual daily revenue.',
    work: 'Server Calibrations'
  },
  {
    name: 'Rhys Nolan',
    stars: 4,
    date: 'Jan 2025',
    text: 'Responsive, patient, and the follow-up docs keep our team aligned.',
    work: 'Client Enablement'
  },
  {
    name: 'Cora Voss',
    stars: 5,
    date: 'Dec 2024',
    text: 'The analytics ecosystem is finally reliable—ad spend decisions can resume.',
    work: 'Analytics Ops',
    verifyUrl: 'https://www.linkedin.com/in/cora-voss/'
  },
  {
    name: 'Ezra Finch',
    stars: 5,
    date: 'Dec 2024',
    text: 'Converted all of our ad platforms to verified server events without losing data.',
    work: 'Server Events Migration',
    verifyUrl: 'https://www.linkedin.com/in/ezra-finch/'
  },
  {
    name: 'Nadia Price',
    stars: 4,
    date: 'Nov 2024',
    text: 'Supportive, proactive, and thorough. Tracking accuracy improved immediate.',
    work: 'Support & Ops'
  },
  {
    name: 'Blake Mercer',
    stars: 5,
    date: 'Nov 2024',
    text: 'MJ’s partnership saved our launch. Server events are bulletproof now.',
    work: 'Launch Readiness',
    verifyUrl: 'https://www.linkedin.com/in/blake-mercer/'
  },
  {
    name: 'Tara Mills',
    stars: 5,
    date: 'Oct 2024',
    text: 'We finally have a single view of conversions across Meta, TikTok, and Google.',
    work: 'Multi-platform Alignment',
    verifyUrl: 'https://www.linkedin.com/in/tara-mills/'
  },
  {
    name: 'Julian Park',
    stars: 4,
    date: 'Oct 2024',
    text: 'Attentive, detail-focused, and fair with prioritization. Highly recommended.',
    work: 'Prioritization'
  },
  {
    name: 'Reina Costa',
    stars: 5,
    date: 'Sep 2024',
    text: 'Excellent storytelling—data insights plus action items we could implement fast.',
    work: 'Storytelling',
    verifyUrl: 'https://www.trustpilot.com/review/example.com/2'
  },
  {
    name: 'Milo Adams',
    stars: 5,
    date: 'Aug 2024',
    text: 'Our pixel/server mix is now synced, which stabilized ROAS right away.',
    work: 'Pixel + Server Sync'
  },
  {
    name: 'Nina Brooks',
    stars: 5,
    date: 'Aug 2024',
    text: 'MJ took complete ownership of the tracking stack and kept us in the loop.',
    work: 'Tracking Ownership',
    verifyUrl: 'https://www.google.com/maps?cid=5647382910'
  },
  {
    name: 'Otis Hale',
    stars: 4,
    date: 'Jul 2024',
    text: 'Practical, non-technical explanations made it easy for our marketing team to trust the data.',
    work: 'Education'
  },
  {
    name: 'Lena Sethi',
    stars: 5,
    date: 'Jul 2024',
    text: 'Managed a complex migration with grace and clarity. Data quality is back.',
    work: 'Migration'
  },
  {
    name: 'Xander Zhou',
    stars: 5,
    date: 'Jun 2024',
    text: 'Balanced speed with precision. Our dashboards now show real conversions again.',
    work: 'Dashboard Calibration'
  },
  {
    name: 'Amelia Vogel',
    stars: 5,
    date: 'Jun 2024',
    text: 'A trusted partner for trustworthy data—tracking has been problem-free since working together.',
    work: 'Data Partnership'
  }
]

const limitedReviews = reviews.slice(0, 10)
const baseHref = import.meta.env.BASE_URL ?? '/'

const getReviewIndicator = (stars: number): string => `Rated ${stars}/5`

export function HappyCustomersPage(): React.ReactElement {
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const cardRefs = useRef<Array<HTMLDivElement | null>>([])
  const activeIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = React.useState(0)

  const scrollToIndex = (index: number): void => {
    const container = carouselRef.current
    const card = cardRefs.current[index]
    if (!container || !card) return
    const offset = card.offsetLeft - (container.clientWidth - card.offsetWidth) / 2
    container.scrollTo({ left: offset, behavior: 'smooth' })
  }

  const handleScroll = (): void => {
    const container = carouselRef.current
    if (!container) return
    const center = container.scrollLeft + container.clientWidth / 2
    let closest = 0
    let minDiff = Infinity
    cardRefs.current.forEach((card, idx) => {
      if (!card) return
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      const diff = Math.abs(cardCenter - center)
      if (diff < minDiff) {
        minDiff = diff
        closest = idx
      }
    })
    if (closest !== activeIndexRef.current) {
      activeIndexRef.current = closest
      setActiveIndex(closest)
    }
  }

  React.useEffect(() => {
    const container = carouselRef.current
    if (!container) return
    scrollToIndex(activeIndex)
    const listener = (): void => handleScroll()
    container.addEventListener('scroll', listener, { passive: true })
    return () => {
      container.removeEventListener('scroll', listener)
    }
  }, [])

  const scrollBy = (direction: 'prev' | 'next'): void => {
    const maxIndex = limitedReviews.length - 1
    const delta = direction === 'next' ? 1 : -1
    const next = Math.max(0, Math.min(maxIndex, activeIndexRef.current + delta))
    activeIndexRef.current = next
    setActiveIndex(next)
    scrollToIndex(next)
  }

  return (
    <div className="relative min-h-screen">
      <SiteHeader whiteBar homeHref={baseHref} />
      <div className="absolute inset-0">
        <img
          src={sceneImage}
          alt="Mountain valley scene"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/90" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col bg-transparent px-4 pb-16 pt-[96px] text-white">
        <header className="mx-auto flex w-full max-w-5xl flex-col gap-5 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">Testimonials</p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Trusted by 200+ growth-focused teams across retail, e-commerce, and SaaS.
          </h1>
          <p className="mx-auto max-w-2xl text-base text-white/80 sm:text-lg">
            Every review below reflects a genuine experience—server-side tracking, analytics alignment,
            and the clarity your acquisition leaders need to scale with confidence.
          </p>
          <div className="flex justify-center">
            <TestimonialBadge rating="4.9" reviewCount="from 1366 reviews" />
          </div>
        </header>

        <main className="relative mt-12 flex-1">
          <div className="mx-auto max-w-6xl space-y-6 rounded-[40px] border border-white/20 bg-white/5 p-6 shadow-[0_30px_60px_rgba(0,0,0,0.45)] backdrop-blur">
            <div className="relative">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-white">Client reviews</p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    aria-label="Previous reviews"
                    onClick={() => scrollBy('prev')}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white shadow-lg transition hover:border-white/50 hover:bg-black/40"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    aria-label="Next reviews"
                    onClick={() => scrollBy('next')}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white shadow-lg transition hover:border-white/50 hover:bg-black/40"
                  >
                    ›
                  </button>
                </div>
              </div>

              <div className="mt-6 carousel-mask">
                <div
                  ref={carouselRef}
                  className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 pr-2 touch-pan-x"
                  style={{ scrollPaddingInline: 'calc((100% - 320px) / 2)' }}
                >
                  {limitedReviews.map((review, index) => (
                    <article
                      key={review.name}
                      ref={(element) => {
                        cardRefs.current[index] = element as HTMLDivElement | null
                      }}
                      className="w-[320px] max-w-[320px] shrink-0 rounded-[28px] border border-white/30 bg-white p-6 text-ink shadow-[0_20px_55px_rgba(0,0,0,0.45)] snap-center"
                    >
                      <header className="mb-4 flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold">{review.name}</p>
                          <p className="text-xs text-ink-subtle">{review.date}</p>
                        </div>
                        <span className="text-xs text-ink-muted">{getReviewIndicator(review.stars)}</span>
                      </header>

                      <p className="text-sm font-semibold text-ink">{review.work}</p>
                      {review.verifyUrl && (
                        <p className="mt-1 text-xs text-ink-subtle wrap-break-word">{review.verifyUrl}</p>
                      )}

                      <div className="mt-4 flex gap-1 text-amber-500">
                        {Array.from({ length: 5 }, (_, starIndex) => (
                          <svg
                            key={`${review.name}-${starIndex}`}
                            viewBox="0 0 24 24"
                            className={`h-4 w-4 fill-current ${starIndex >= review.stars ? 'text-amber-200' : ''}`}
                          >
                            <path d="M12 2.5l2.7 6.05 6.55.52-5 4.33 1.5 6.37L12 16.9l-5.75 2.87 1.5-6.37-5-4.33 6.55-.52z" />
                          </svg>
                        ))}
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-ink">{review.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="mt-12 flex justify-center">
          <TestimonialBadge rating="4.9" reviewCount="from 1366 reviews" />
        </div>

        <SiteFooter />
      </div>
    </div>
  )
}

