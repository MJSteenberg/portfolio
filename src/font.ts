import recoletaFontUrl from './assets/fonts/Recoleta-Regular.woff2?url'

export const ensureRecoletaPreload = (): void => {
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

