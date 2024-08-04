import React from 'react'
import ReactDOM from 'react-dom/client'
import Maps from './Maps.tsx'
import Footer from '@/Footer.tsx'
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Maps />
    <Footer />
  </React.StrictMode>,
)
