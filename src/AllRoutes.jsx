import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Cities from './pages/Cities'
import Cart from './pages/Cart'
import Seats from './pages/Seats'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/cities' element={<Cities />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/selectseats/:id' element={<Seats />}/>
    </Routes>
  )
}

export default AllRoutes