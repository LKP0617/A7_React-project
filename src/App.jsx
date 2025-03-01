import { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router';
import Header from './layout/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import './assets/scss/all.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
      </Routes>
    </>
  )
}

export default App
