import React from 'react'
import { Routes,Route } from "react-router-dom"
import Register from '../Pages/Register'
import Login from '../Pages/Login'

function MainRoute() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Register/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRoute