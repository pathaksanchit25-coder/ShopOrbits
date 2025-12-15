import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../AuthPages/Register'
import Login from '../AuthPages/Login'
import Navbar from '../General/Navbar'
import GeneralPage from '../General/GeneralPage'

const AuthRoutes = () => {
  return (
    <div>
        <Routes>
          {/* Auth Routes */}
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />


            {/* Routes for General Page */}
            <Route path='/' element={<GeneralPage/>}/>
        </Routes>
    </div>
  )
}

export default AuthRoutes