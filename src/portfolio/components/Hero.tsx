import React from 'react'
import { CALENDLY_LINK, CORE_HEADLINE, CORE_PARAGRAPHS, PRIMARY_CTA_LABEL, SECONDARY_CTA_LABEL, GOOGLE_SHEETS_WEB_APP_URL } from '../constants.ts'
import sceneImage from '../../assets/scene.webp'

const TESTIMONIALS_PAGE_URL = `${import.meta.env.BASE_URL}happy-customers`

const SimpleReviewCTA = (): React.ReactElement => (
  <a
    href={TESTIMONIALS_PAGE_URL}
    className="simple-trust-signal relative inline-flex items-center gap-3 rounded-full border border-white/30 bg-black/80 px-6 py-3 text-sm font-semibold tracking-[0.4em] text-white transition hover:border-emerald-200/80"
  >
    <span className="flex items-center gap-1">
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-amber-400">
        <path d="M12 2.5l2.7 6.05 6.55.52-5 4.33 1.5 6.37L12 16.9l-5.75 2.87 1.5-6.37-5-4.33 6.55-.52z" />
      </svg>
      <span className="text-base font-semibold">4.9/5</span>
    </span>
    <span className="tracking-[0.4em] text-[0.65rem] text-white/70">from 1366 reviews</span>
  </a>
)

export function Hero(): React.ReactElement {
  const [submitted, setSubmitted] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitError, setSubmitError] = React.useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    try {
      setIsSubmitting(true)
      setSubmitError(null)

      if (!GOOGLE_SHEETS_WEB_APP_URL || GOOGLE_SHEETS_WEB_APP_URL.includes('YOUR_DEPLOYMENT_ID')) {
        throw new Error('Google Sheets endpoint not configured')
      }

      const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...payload,
          submittedAt: new Date().toISOString(),
          source: 'portfolio-site'
        })
      })

      if (!response.ok) {
        throw new Error(`Sheets webhook returned ${response.status}`)
      }

      form.reset()
      setSubmitted(true)
      window.setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Failed to send lead to Sheets', error)
      setSubmitError('Something went wrong. Please try again or email mjsteenberg@gmail.com.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <header id="hero" className="relative isolate overflow-hidden pt-16 pb-8 md:pt-20 md:pb-10">
      <div className="container relative mx-auto px-4 sm:px-6 md:px-10">
        <div className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] border border-white/15 text-white">
          <img
            src={sceneImage}
            alt="Mountain valley scene"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/65 via-black/40 to-black/15 md:bg-linear-to-r" />

          <div className="relative z-10 grid items-start gap-8 sm:gap-10 lg:gap-16 lg:grid-cols-[1.05fr_0.95fr] p-5 sm:p-8 lg:p-14">
            <div className="space-y-6 max-w-2xl text-balance">
              <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight text-white">
                {CORE_HEADLINE}
              </h1>

              <div className="space-y-3 text-base sm:text-lg text-white/85 leading-relaxed">
                {CORE_PARAGRAPHS.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a className="btn-inverse w-full justify-center sm:w-auto" href="#contact-form">
                  {PRIMARY_CTA_LABEL}
                </a>
                <a className="btn-inverse w-full justify-center sm:w-auto" href={CALENDLY_LINK} target="_blank" rel="noreferrer">
                  {SECONDARY_CTA_LABEL}
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-center">
                <SimpleReviewCTA />
              </div>

              <div className="rounded-[32px] border border-white/20 bg-white/10 p-6 sm:p-8 text-white shadow-2xl backdrop-blur">
                <form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-semibold text-white/80" htmlFor="hero-name">Name</label>
                      <input
                        id="hero-name"
                        name="name"
                        required
                        placeholder="MJ Steenberg"
                        className="mt-1 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder-white/60 outline-none focus:border-white focus:ring-2 focus:ring-white/40"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-white/80" htmlFor="hero-email">Email</label>
                      <input
                        id="hero-email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="mt-1 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder-white/60 outline-none focus:border-white focus:ring-2 focus:ring-white/40"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-sm font-semibold text-white/80" htmlFor="hero-company">Company / Store</label>
                      <input
                        id="hero-company"
                        name="company"
                        placeholder="Unome Packaging"
                        className="mt-1 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder-white/60 outline-none focus:border-white focus:ring-2 focus:ring-white/40"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-sm font-semibold text-white/80" htmlFor="hero-need">What do you need help with?</label>
                      <textarea
                        id="hero-need"
                        name="need"
                        rows={4}
                        placeholder="Meta can't see COD orders, GA4 revenue is off by 30%, TikTok doesn’t receive server events…"
                        className="mt-1 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder-white/60 outline-none focus:border-white focus:ring-2 focus:ring-white/40"
                      />
                    </div>
                  </div>

                <button className="btn-inverse w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending…' : PRIMARY_CTA_LABEL}
                  </button>
                  {submitted && (
                    <p className="text-sm text-emerald-200">
                      Got it! I&apos;ll reply within one business day.
                    </p>
                  )}
                {submitError && (
                  <p className="text-sm text-red-200">
                    {submitError}
                  </p>
                )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}


