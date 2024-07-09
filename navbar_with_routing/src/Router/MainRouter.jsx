import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Product from '../Pages/Product'
import Cart from '../Pages/Cart'
import Blog from '../Pages/Blog'
import Contact from '../Pages/Contact'

function MainRouter() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/blog' element={<Blog/>}></Route>
            <Route path='/contact' element={<Contact/>} ></Route>
        </Routes>
    </div>
  )
}

export default MainRouter