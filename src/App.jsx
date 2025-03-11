import { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import './assets/scss/all.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        
        <Route path="/products/:productId" element={<ProductDetail />} />

      </Routes>
    </>
  )
}

export default App
