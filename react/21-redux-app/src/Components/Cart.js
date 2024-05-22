import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cartItems = useSelector((state => state.cart))
  console.log(cartItems)
  return (  
    <div>
      <h2>Cart Page</h2>
      
    </div>
  )
}

export default Cart
