import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './Hero.tsx'
import SaveTheDate from './SaveTheDate.tsx'
import Header from './Header.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Hero />
    <SaveTheDate />
  </React.StrictMode>,
)
