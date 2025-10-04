import React from 'react'
import home from './pages/home'
import cart from './pages/cart'
import PlaceOrder from './pages/PlaceOrder'
import Navbar from './components/navbar'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<home/>}/>
        <Route path='/cart' element={<cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
  )
}

export default App
