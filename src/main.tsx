import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './Hero.tsx'
import SaveTheDate from './SaveTheDate.tsx'
import Location from './Location.tsx'
import Nav from './Nav.tsx'
import Footer from './Footer.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Hero />
    <SaveTheDate />
    <Location />
    <Nav />
    <Footer />
  </React.StrictMode>,
)
