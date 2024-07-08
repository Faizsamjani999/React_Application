import React from 'react'
import { Routes,Route } from "react-router-dom"

import Home from '../Pages/Home'
import About from '../Pages/About'
import Product from '../Pages/Product'
import Blog from "../Pages/Blog"
import Contact from "../Pages/Contact"
import Error from "../Pages/Error"

function MainRouter() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
    </div>
  )
}

export default MainRouter