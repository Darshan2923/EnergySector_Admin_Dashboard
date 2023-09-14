import React from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import DashBoard from './components/DashBoard'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashBoard />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App