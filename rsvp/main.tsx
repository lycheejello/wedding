import React from 'react'
import ReactDOM from 'react-dom/client'
import Rsvp from './Rsvp.tsx'
import Footer from '@/Footer.tsx'
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Footer />
    <Rsvp />
  </React.StrictMode>,
)
