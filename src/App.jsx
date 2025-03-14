import { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import SevenStory from './pages/SevenStory';
import News from './pages/News';
import QA from './pages/QA';
import Cart from './pages/cart';
import Checkout from './pages/Checkout';
import CreatedOrder from './pages/CreatedOrder';
import './assets/scss/all.scss'

import TestAPI from "./pages/TestApi"; // 🔹 新增測試頁面

function App() {
  return (
    <>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path="/products/:productId" element={<ProductDetail />}></Route>
          
          
          <Route path='/news' element={<News />}></Route>
          <Route path='/sevenStory' element={<SevenStory />}></Route>
          <Route path='/Q&A' element={<QA />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='/createdOrder' element={<CreatedOrder />}></Route>
          <Route path="/test-api" element={<TestAPI />} /> {/* 🔹 測試 API */}
        </Routes>
      </div>
    </>
  )
}

export default App
