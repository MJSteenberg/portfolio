import React from 'react'
import { CALENDLY_LINK, CORE_HEADLINE, CORE_PARAGRAPHS, PRIMARY_CTA_LABEL, SECONDARY_CTA_LABEL } from '../constants.ts'
import sceneImage from '../../assets/scene.webp'
import shopifyIcon from '../../assets/partners/shopify-icon.svg'
import wooIcon from '../../assets/partners/woocommerce.png'
import gtmIcon from '../../assets/partners/google-tag-manager-svgrepo-com.svg'
import ga4Icon from '../../assets/partners/google_analytics-icon.svg'

const PARTNER_BADGES = [
  { key: 'shopify', label: 'Shopify', icon: shopifyIcon, bg: 'bg-white/15' },
  { key: 'woocommerce', label: 'WooCommerce', icon: wooIcon, bg: 'bg-white/15' },
  { key: 'gtm', label: 'Google Tag Manager', icon: gtmIcon, bg: 'bg-white/15' },
  { key: 'ga4', label: 'GA4', icon: ga4Icon, bg: 'bg-white/15' }
]

export function Hero(): React.ReactElement {
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())
    console.log('Contact request', payload)
    form.reset()
    setSubmitted(true)
    window.setTimeout(() => setSubmitted(false), 5000)
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
              <div className="rounded-[32px] border border-white/20 bg-white/10 p-4 sm:p-6 text-white shadow-2xl backdrop-blur space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-3 text-sm sm:text-base">
                  <span className="font-semibold tracking-wide text-white/90">Over 200 happy clients</span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/40 bg-emerald-200/20 px-3 py-1 text-xs sm:text-sm font-semibold text-white">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                      <path d="M12 2.5l2.7 6.05 6.55.52-5 4.33 1.5 6.37L12 16.9l-5.75 2.87 1.5-6.37-5-4.33 6.55-.52z" />
                    </svg>
                    4.8 / 5 on Trustpilot
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {PARTNER_BADGES.map((partner) => (
                    <span
                      key={partner.key}
                      className={`inline-flex items-center gap-2 rounded-full ${partner.bg} px-3 py-1 text-white/90 backdrop-blur`}
                      aria-label={partner.label}
                    >
                      <img src={partner.icon} alt={partner.label} className="h-5 w-auto" />
                    </span>
                  ))}
                </div>
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

                  <button className="btn-inverse w-full justify-center" type="submit">
                    {PRIMARY_CTA_LABEL}
                  </button>
                  {submitted && (
                    <p className="text-sm text-emerald-200">
                      Got it! I&apos;ll reply within one business day.
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


