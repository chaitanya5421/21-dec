import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../Components/Products'
import Product from '../Components/Product'
import Cart from '../Components/Cart'

const Routing = () => {
  return (
    <Routes>
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:myid' element={<Product />} />
    </Routes>
  )
}

export default Routing
