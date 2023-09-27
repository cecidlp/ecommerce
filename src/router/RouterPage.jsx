import React from 'react'
import { Routes, Route } from 'react-router'
import Login from '../Pages/Login/Login'
import Home from '../Pages/Home/Home'
import Details from '../Pages/Details/Details'

const RouterPage = () => {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/' element={<Home/>} />
            <Route path='*' element={<h2>Error 404: Page not found</h2>} />
            <Route path='/details/:productId' element={<Details/>}/>
        </Routes>
    </div>
  )
}

export default RouterPage