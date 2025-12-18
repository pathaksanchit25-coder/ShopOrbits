import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../AuthPages/Register'
import Login from '../AuthPages/Login'
import GeneralPage from '../General/GeneralPage'
import AdminPage from '../AdminPages/AdminPage'
import UserPage from '../UserPages/UserPage'
import AddProduct from '../AdminPages/AddProduct'
import ManageProducts from '../AdminPages/ManageProducts'

const AuthRoutes = () => {
  return (
    <div>
        <Routes>
          {/* Auth Routes */}
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />


            {/* Routes for General Page */}
            <Route path='/' element={<GeneralPage/>}/>

            {/* Routes for Admin Page */}

            <Route path = '/admin/dashboard/:id' element={<AdminPage/>} />
            <Route path = '/user/:id' element={<UserPage/>} />
            <Route path='/admin/add-product/:id' element={<AddProduct/>}/>
            <Route path='/admin/manage-products/:id' element={<ManageProducts/>}/>
        </Routes>
    </div>
  )
}

export default AuthRoutes