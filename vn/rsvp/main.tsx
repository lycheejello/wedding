import React from 'react'
import ReactDOM from 'react-dom/client'
import Rsvp from './Rsvp.tsx'
import Footer from 'vnsrc/Footer.tsx'
import 'vnsrc/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Rsvp />
    <Footer />
  </React.StrictMode>,
)
