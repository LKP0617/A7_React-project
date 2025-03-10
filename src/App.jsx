import { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Products from './pages/Products';
import SevenStory from './pages/SevenStory';
import News from './pages/News';
import QA from './pages/QA';
import Cart from './pages/cart';
import Checkout from './pages/Checkout';
import './assets/scss/all.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/news' element={<News/>}></Route>
        <Route path='/sevenStory' element={<SevenStory/>}></Route>
        <Route path='/Q&A' element={<QA/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
      </Routes>
    </>
  )
}

export default App
