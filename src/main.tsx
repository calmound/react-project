import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/Index'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'antd/dist/antd.css'

import './main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
