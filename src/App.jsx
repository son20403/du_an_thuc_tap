import { useState } from 'react'
import './App.css'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import HomePage from './pages/HomePage'
import './assets/js/main.js';

function App() {

  return (
    <div className='min-h-screen'>
      <Header></Header>
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
