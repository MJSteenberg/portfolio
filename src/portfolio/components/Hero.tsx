import React from 'react'
import { CALENDLY_LINK, CONTACT_EMAIL } from '../constants.ts'

export function Hero(): React.ReactElement {
  return (
    <header className="hero-image relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-linear-to-b from-black/85 via-black/65 to-black/40" />

      <div className="relative container mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-24 flex flex-col gap-10 lg:flex-row lg:items-end">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
            Shopify & Google Tracking
          </div>

          <h1 className="text-5xl md:text-7xl leading-[1.05] tracking-tight">
            <span>Hi, I&apos;m MJ.</span><br />
            <span>Need help fixing your Shopify or Google tracking?</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/85 max-w-2xl">
            Most stores are missing real purchase data inside Google, Meta, and GA4.
            I help brands fix that — so their ads optimise on real revenue, not guesses.
          </p>

          <p className="text-lg text-white/75 max-w-2xl">
            I focus on making your ad platforms see the same revenue you see inside your store,
            using browser and server-side tracking for Shopify and WooCommerce.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a className="btn-inverse" href={CALENDLY_LINK} target="_blank" rel="noreferrer">Book a discovery call</a>
            <a className="btn-inverse bg-white/5 hover:bg-white/15" href={`mailto:${CONTACT_EMAIL}`}>Prefer email?</a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/15 bg-white/10 px-6 py-5 text-white/80 backdrop-blur max-w-sm">
          <p className="text-sm uppercase tracking-[0.25em] text-white/60">What clients ask</p>
          <ul className="mt-4 space-y-3 text-base">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
              &ldquo;Why can&apos;t Meta see the same revenue that Shopify does?&rdquo;
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
              &ldquo;How do we trust GA4 when subscriptions or COD orders disappear?&rdquo;
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
              &ldquo;Can we ship server-side tracking without breaking Klaviyo or Pixels?&rdquo;
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}


