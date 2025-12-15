import React from 'react'
import RegisterUser from './AuthPages/RegisterUser'
import LoginUser from './AuthPages/LoginUser'
import AuthRoutes from './AuthRoutes/AuthRoutes'

const App = () => {
  return (
    <div>
      <div> 
        <AuthRoutes/>
      </div>
    </div>
  )
}

export default App