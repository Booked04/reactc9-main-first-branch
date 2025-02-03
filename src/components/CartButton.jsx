import React, {useContext} from 'react'
import { CartContext } from './CartContext'


export default function CartButton() {
  const {CartCount} = useContext(CartContext)
  return (
    <div>
        item in cart: {CartCount} 
    </div>
  )
}
