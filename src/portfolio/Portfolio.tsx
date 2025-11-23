import React from 'react'
import { Hero } from './components/Hero.tsx'
import { SceneSection } from './components/SceneSection.tsx'
// Font controls removed per request

export function Portfolio(): React.ReactElement {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <SceneSection />

      <footer className="mt-auto py-12 text-center ink-subtle text-sm">
        © {new Date().getFullYear()} MJ Steenberg — Cape Town, South Africa
      </footer>
    </div>
  )
}


