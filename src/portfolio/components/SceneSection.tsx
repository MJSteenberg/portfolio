import React from 'react'
import { CALENDLY_LINK, CONTACT_EMAIL } from '../constants.ts'
import sceneImage from '../../assets/scene.webp'

export function SceneSection(): React.ReactElement {
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
    <section className="relative -mt-12 pb-16 md:pb-28">
      <div className="container mx-auto px-6 md:px-10">
        <div className="relative overflow-hidden rounded-[40px] text-white shadow-2xl">
          <img
            src={sceneImage}
            alt="Mountain valley scene"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b md:bg-linear-to-r from-black/90 via-black/70 to-black/30" />

          <div className="relative grid gap-10 lg:grid-cols-2 p-6 sm:p-10 lg:p-14">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-white/70">Fix the source of truth</p>
              <h2 className="text-4xl md:text-5xl leading-tight">
                Your ad platforms should see the exact revenue you see.
              </h2>
              <p className="text-lg text-white/85 max-w-2xl">
                Whether GA4 drops COD orders or Meta miscounts subscriptions, I rebuild your browser + server signals so every purchase is captured,
                verified, and ready for optimisation.
              </p>

              <ul className="space-y-3 text-white/85">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
                  Map your current events across Shopify, WooCommerce, Recharge, and custom flows.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
                  Implement server + browser conversions for Google Ads, Meta, TikTok, and GA4.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
                  Validate with Looker/Sheets dashboards so finance, ops, and marketing match.
                </li>
              </ul>

              <div className="flex flex-wrap gap-3">
                <a className="btn-inverse" href={CALENDLY_LINK} target="_blank" rel="noreferrer">
                  Book a discovery call
                </a>
                <a className="btn-inverse" href={`mailto:${CONTACT_EMAIL}`}>
                  Prefer email?
                </a>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/20 bg-white/10 p-6 sm:p-8 backdrop-blur max-w-xl lg:max-w-none"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-white/80" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="MJ Steenberg"
                    className="mt-1 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder-white/60 outline-none focus:border-white focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-white/80" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="mt-1 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder-white/60 outline-none focus:border-white focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-semibold text-white/80" htmlFor="company">Company / Store</label>
                  <input
                    id="company"
                    name="company"
                    placeholder="Unome Packaging"
                    className="mt-1 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder-white/60 outline-none focus:border-white focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-semibold text-white/80" htmlFor="need">What do you need help with?</label>
                  <textarea
                    id="need"
                    name="need"
                    rows={4}
                    placeholder="Meta can't see COD orders, GA4 revenue is off by 30%, TikTok doesn’t receive server events…"
                    className="mt-1 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder-white/60 outline-none focus:border-white focus:ring-2 focus:ring-white/50"
                  />
                </div>
              </div>

              <button className="btn-inverse mt-6 w-full justify-center" type="submit">
                Share project details
              </button>
              {submitted && (
                <p className="mt-3 text-sm text-emerald-200">
                  Got it! I&apos;ll reply within one business day.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
