import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RegisterUser from '../AuthPages/RegisterUser'
import LoginUser from '../AuthPages/LoginUser'

const AuthRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/user/register' element={<RegisterUser/>} />
            <Route path='/user/login' element={<LoginUser/>} />
        </Routes>
    </div>
  )
}

export default AuthRoutes