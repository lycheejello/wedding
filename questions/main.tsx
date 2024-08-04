import React from 'react'
import ReactDOM from 'react-dom/client'
import Questions from './Questions.tsx'
import Footer from '@/Footer.tsx'
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Questions />
    <Footer />
  </React.StrictMode>,
)
