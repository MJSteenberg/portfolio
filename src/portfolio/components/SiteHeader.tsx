import React from 'react'
import { CALENDLY_LINK, PRIMARY_CTA_LABEL, SECONDARY_CTA_LABEL } from '../constants.ts'

type Props = {
  whiteBar?: boolean
  homeHref?: string
}

export function SiteHeader({ whiteBar = false, homeHref = '#hero' }: Props): React.ReactElement {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 32
      setIsScrolled(scrolled)
      if (scrolled) {
        setIsMenuOpen(false)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    window.addEventListener('keydown', handleKey)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('keydown', handleKey)
    }
  }, [])

  const wrapperClasses = [
    'pointer-events-none fixed inset-x-0 flex justify-center transition-all duration-300 z-50',
    isScrolled ? 'top-4' : 'top-2'
  ].join(' ')

  const navClasses = [
    'pointer-events-auto relative flex w-full flex-wrap items-center gap-3 text-sm font-medium transition-all duration-300',
    whiteBar
      ? 'rounded-full border border-black/10 bg-white/95 px-4 sm:px-6 md:px-8 py-3 shadow-2xl text-ink backdrop-blur-lg'
      : isScrolled
        ? 'rounded-full border border-black/10 bg-white/90 px-4 sm:px-6 md:px-8 py-3 shadow-2xl backdrop-blur-lg'
        : 'rounded-2xl border border-transparent px-3 md:px-4 py-2'
  ].join(' ')

  return (
    <div className={wrapperClasses}>
      <div className="container pointer-events-none px-4 sm:px-6 md:px-10">
        <nav className={navClasses}>
        <div className="flex w-full flex-1 items-center justify-between gap-2 sm:w-auto sm:justify-start">
          <a href={homeHref} className="text-lg sm:text-xl font-semibold text-ink hover:text-emerald-600 transition-colors">
            Hi, I&apos;m MJ
          </a>
          <div className="hidden md:flex items-center gap-2 text-ink-subtle">
            <span className="inline-flex h-1 w-1 rounded-full bg-emerald-400" />
            <span>Attribution Engineer</span>
          </div>
          <div className="flex flex-none items-center gap-2 md:hidden">
            <a
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink shadow-sm transition hover:bg-white"
              href="#contact-form"
            >
              {PRIMARY_CTA_LABEL}
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-ink shadow-sm transition hover:bg-white"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1h16M1 7h12M1 13h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="hidden w-full items-center justify-end gap-2 sm:flex sm:w-auto sm:gap-3">
          <a href="#hero" className="hidden lg:inline text-ink-subtle hover:text-ink transition-colors">
            Overview
          </a>
          <a href="#contact-form" className="hidden sm:inline text-ink-subtle hover:text-ink transition-colors">
            Services
          </a>
          <div className="hidden md:flex items-center gap-2">
            <a className="btn" href="#contact-form">
              {PRIMARY_CTA_LABEL}
            </a>
            <a className="btn" href={CALENDLY_LINK} target="_blank" rel="noreferrer">
              {SECONDARY_CTA_LABEL}
            </a>
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute left-3 right-3 top-full mt-3 rounded-3xl border border-black/10 bg-white/95 p-4 text-base font-semibold text-ink shadow-2xl backdrop-blur md:hidden">
            <ul className="space-y-3">
              <li>
                <a className="flex items-center justify-between" href="#hero" onClick={() => setIsMenuOpen(false)}>
                  Overview <span className="text-sm text-ink-subtle">↘︎</span>
                </a>
              </li>
              <li>
                <a className="flex items-center justify-between" href="#contact-form" onClick={() => setIsMenuOpen(false)}>
                  Services <span className="text-sm text-ink-subtle">↘︎</span>
                </a>
              </li>
              <li>
                <a className="flex items-center justify-between" href="#contact-form" onClick={() => setIsMenuOpen(false)}>
                  {PRIMARY_CTA_LABEL} <span className="text-sm text-ink-subtle">↘︎</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-between"
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {SECONDARY_CTA_LABEL} <span className="text-sm text-ink-subtle">↗︎</span>
                </a>
              </li>
            </ul>
          </div>
        )}
        </nav>
      </div>
    </div>
  )
}


