import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { Portfolio } from './portfolio/Portfolio'
import recoletaFontUrl from './assets/fonts/Recoleta-Regular.woff2?url'

const ensureRecoletaPreload = (): void => {
  if (document.head.querySelector('link[data-font="recoleta"]')) {
    return
  }
  const link = document.createElement('link')
  link.rel = 'preload'
  link.href = recoletaFontUrl
  link.as = 'font'
  link.type = 'font/woff2'
  link.crossOrigin = 'anonymous'
  link.dataset.font = 'recoleta'
  document.head.appendChild(link)
}

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element #root not found')
}

ensureRecoletaPreload()

createRoot(rootElement).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
)


