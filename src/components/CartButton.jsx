import React, {useContext} from 'react'
import {CartContext} from '../context/CartContext'

export default function CartButton() {
  const {CartCount} = useContext(CartContext)
  return (
    <div>
        item in cart: 0 
    </div>
  )
}
