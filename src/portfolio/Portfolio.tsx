import React from 'react'
import { Hero } from './components/Hero.tsx'
import { SiteHeader } from './components/SiteHeader.tsx'

export function Portfolio(): React.ReactElement {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f8fc]">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
      </main>
      <footer className="pt-6 pb-10 text-center ink-subtle text-sm">
        © {new Date().getFullYear()} MJ Steenberg — Cape Town, South Africa
      </footer>
    </div>
  )
}


