import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Favourite from './pages/Favourite'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourite />} />
        </Routes>
      </main>
    </div>
  )
}

export default App