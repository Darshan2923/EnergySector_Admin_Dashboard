import React from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import DashBoard from './components/DashBoard'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Navigate to="/dashboard" replace />} />
            <Route path='/dashboard' element={<DashBoard />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App