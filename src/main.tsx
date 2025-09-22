import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Ha from './Ha.tsx'
import Seating from './Seating.tsx'
import QA from './QA.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ha />} />
        <Route path="/seating" element={<Seating />} />
        <Route path="/qa" element={<QA />} />
        <Route path="*" element={<Ha />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
