import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { ensureRecoletaPreload } from './font'
import { HappyCustomersPage } from './happy-customers/HappyCustomersPage'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element #root not found')
}

ensureRecoletaPreload()

createRoot(rootElement).render(
  <React.StrictMode>
    <HappyCustomersPage />
  </React.StrictMode>
)

