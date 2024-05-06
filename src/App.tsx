import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { NavBar } from './components/navbar/NavBar'
import { Footer } from './components/footer/Footer'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container-fluid p-0">
        <Routes>
          <Route path='/' element={ <Home /> } />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
