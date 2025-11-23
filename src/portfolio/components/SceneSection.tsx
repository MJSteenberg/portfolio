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
    <section className="relative -mt-16 pb-16 md:pb-24">
      <div className="container mx-auto px-6 md:px-10">
        <div className="relative overflow-hidden rounded-[32px] bg-ink text-white shadow-2xl">
          <img
            src={sceneImage}
            alt="Mountain valley scene"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b md:bg-linear-to-r from-black/85 via-black/70 to-black/30" />

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,1fr)] p-8 md:p-12">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/70">Shopify & Google Growth Partner</p>
              <h2 className="mt-4 text-4xl md:text-5xl leading-tight">
                Let&apos;s turn your acquisition data into decisive action.
              </h2>
              <p className="mt-4 text-lg text-white/85 max-w-2xl">
                I blend performance marketing intuition with engineering rigour to surface the metrics that matter, spot gaps in your funnels,
                and ship CRO changes that move revenue.
              </p>

              <ul className="mt-6 space-y-3 text-white/85">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
                  Full-funnel dashboards, Looker & GA4 insights.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
                  Shopify + Klaviyo instrumentation & troubleshooting.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
                  Always-on experimentation & CRO playbooks.
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
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
              className="rounded-3xl border border-white/15 bg-white/5 p-6 md:p-8 backdrop-blur"
            >
              <div className="space-y-4">
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
                <div>
                  <label className="text-sm font-semibold text-white/80" htmlFor="company">Company / Store</label>
                  <input
                    id="company"
                    name="company"
                    placeholder="Unome Packaging"
                    className="mt-1 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder-white/60 outline-none focus:border-white focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-white/80" htmlFor="need">What do you need help with?</label>
                  <textarea
                    id="need"
                    name="need"
                    rows={4}
                    placeholder="Shopify tracking is messy, GA4 events are missing and CAC looks inflated..."
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
