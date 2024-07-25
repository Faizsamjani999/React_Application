import React from 'react'
import { Routes,Route } from "react-router-dom"
import Home from '../Pages/Home'
import SearchMovie from '../Pages/SearchMovie'

function MainRoute() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/searchmovie' element={<SearchMovie/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRoute