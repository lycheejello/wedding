import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Ha from './Ha.tsx'
import Seating from './Seating.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ha />} />
        <Route path="/seating" element={<Seating />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
