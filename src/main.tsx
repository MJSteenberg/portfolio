import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { Portfolio } from './portfolio/Portfolio'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element #root not found')
}

createRoot(rootElement).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
)


