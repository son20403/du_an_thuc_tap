import './App.css'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Loading from './components/loading/Loading.jsx'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './layouts/ScrollToTop.jsx'

function App() {

  return (
    <div className='min-h-screen'>
      <ScrollToTop />
      <Loading></Loading>
      <Header></Header>
      <Outlet></Outlet>
      <Footer />
    </div>
  )
}

export default App
