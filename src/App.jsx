import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Cart, Home, PlaceOrder } from './pages'
import { Footer } from './components'
import Login from './components/registration/Login'

export default function App() {
  const [login, setLogin] = useState(false);
  return (
    <>
    {login?<Login setLogin={setLogin} />:<></>}
    <div className="app">
      <Navbar setLogin={setLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart  />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
      <Footer />
    </div>
    </>
  )
}
