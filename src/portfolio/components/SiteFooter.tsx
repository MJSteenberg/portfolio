import React from 'react'

export function SiteFooter(): React.ReactElement {
  return (
    <footer className="pt-6 pb-10 text-center text-sm text-ink-subtle">
      © {new Date().getFullYear()} MJ Steenberg — Cape Town, South Africa
    </footer>
  )
}

