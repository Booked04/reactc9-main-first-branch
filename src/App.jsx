import React from 'react'
import Heading from './components/Heading'
import Card from './components/Card'
import Counter from './components/Counter'
import GithubSearch from './components/GithubSearch'
import ProductList from './components/ProductList'
import CartButton from './components/CartButton'
import CartProvider from './components/CartContext'

export default function App() {
  return (
    <div>
    <CartProvider>
     <CartButton />
      <ProductList />
    </CartProvider>
    </div>
  )
}
