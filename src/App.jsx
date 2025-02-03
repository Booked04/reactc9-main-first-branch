import React from 'react'
import Heading from './components/Heading'
import Card from './components/Card'
import Counter from './pages/Counter'
import GithubSearch from './pages/GithubSearch'
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

    <Routes>

    </Routes>
    
    </div>
  )
}
