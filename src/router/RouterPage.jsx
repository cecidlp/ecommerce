import React from 'react'
import { Routes, Route } from 'react-router'
import Login from '../Pages/Login/Login'
import Home from '../Pages/Home/Home'

const RouterPage = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='*' element={<h2>Error 404: Page not found</h2>} />
        </Routes>
    </div>
  )
}

export default RouterPage