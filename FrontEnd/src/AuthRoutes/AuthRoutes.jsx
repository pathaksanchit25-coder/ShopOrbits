import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../AuthPages/Register'
import Login from '../AuthPages/Login'

const AuthRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
        </Routes>
    </div>
  )
}

export default AuthRoutes