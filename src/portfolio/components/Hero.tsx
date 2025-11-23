import React from 'react'
import { CALENDLY_LINK, CONTACT_EMAIL } from '../constants.ts'

export function Hero(): React.ReactElement {
  return (
    <header className="relative bg-transparent">

      <div className="container mx-auto px-6 md:px-10 pt-28 md:pt-40 pb-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs ink-subtle mb-6">
            <span>Data Analyst</span>
            <span className="text-black/40">•</span>
            <span>Cape Town, South Africa</span>
          </div>

          <h1 className="text-5xl md:text-7xl leading-[0.95] tracking-tight text-ink">
            Hi, I'm MJ. <br></br>Need help with Shopify? or anything Google related?
          </h1>

          <p className="mt-6 text-xl md:text-2xl leading-tight text-ink max-w-3xl">
            Bridging the gap between engineering precision and marketing intuition. <br className="hidden sm:block" />
            Turning data into decisions, and decisions into growth.
          </p>

          <form className="mt-8 glass rounded-xl p-3 md:p-4 max-w-lg" onSubmit={(e) => e.preventDefault()}>
            <label className="sr-only" htmlFor="email">Email</label>
            <div className="flex gap-2">
              <input
                id="email"
                type="email"
                required
                placeholder="Enter your email to join the list"
                className="flex-1 rounded-md border border-black/10 bg-white px-3 py-2 text-base text-black placeholder-black/50 outline-none focus:ring-2 focus:ring-black/20"
              />
              <button className="btn" type="submit">Subscribe</button>
            </div>
            <p className="mt-2 text-xs ink-subtle">Occasional updates. No spam.</p>
          </form>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a className="btn" href={CALENDLY_LINK} target="_blank" rel="noreferrer">Book a call</a>
            <a className="btn" href={`mailto:${CONTACT_EMAIL}`}>Email MJ</a>
          </div>
        </div>
      </div>
    </header>
  )
}


