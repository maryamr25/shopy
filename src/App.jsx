import React from 'react'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Modules/home/Home'
import About from './Modules/about/About'
import Contact from './Modules/contact/Contact'
import AllProducts from './Modules/allproducts/AllProducts'

import SingleProduct from './components/singleproduct/SingleProduct'

import SeeAllCategory from './Modules/seeallcategory/SeeAllCategory'
import Cart from './Modules/cart/Cart'
import Checkout from './components/checkout/Checkout'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/products' element={<AllProducts/>}/>
      
      <Route path='/products/:id' element={<SingleProduct/>}/>
      <Route path='/categories/:name' element={<SeeAllCategory/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App