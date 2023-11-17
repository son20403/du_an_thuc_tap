import { useState } from 'react'
import './App.css'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage.jsx'
import CartPage from './pages/CartPage.jsx'
import DetailProductPage from './pages/DetailProductPage.jsx'
import CheckoutPage from './pages/CheckoutPage.jsx'
import Loading from './components/loading/Loading.jsx'
import { Outlet } from 'react-router-dom'
import Search from './layouts/Search.jsx'

function App() {

  return (
    <div className='min-h-screen'>
      {/* <Loading></Loading> */}
      <Header></Header>
      <Outlet></Outlet>
      <Footer />
    </div>
  )
}

export default App
