import { useState } from 'react'
import './App.css'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import HomePage from './pages/HomePage'
import './assets/js/main.js';
import ShopPage from './pages/ShopPage.jsx'
import CartPage from './pages/CartPage.jsx'
import DetailProductPage from './pages/DetailProductPage.jsx'

function App() {

  return (
    <div className='min-h-screen'>
      <Header></Header>
      <HomePage />
      {/* <ShopPage></ShopPage> */}
      {/* <CartPage></CartPage> */}
      {/* <DetailProductPage></DetailProductPage> */}
      <Footer />
    </div>
  )
}

export default App
