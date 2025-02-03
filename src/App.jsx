import React from 'react'
import { Route, Routes } from 'react-router'
import GithubSearch from './pages/GithubSearch'
import Counter from './pages/Counter'
import Products from './pages/Products'
import { BrowserRouter } from 'react-router-dom'


export default function App() {
  return (
    <Routes>
      <Route index element={GithubSearch />} />
      <route path="/Counter" element={<Counter />} />
      <route path="/Products" element={<Products />} />
    </Routes>
  )
}

