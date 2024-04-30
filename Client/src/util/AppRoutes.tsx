import React from 'react'

import LoginPage from '../pages/LoginPage/LoginPage'
import { Routes,Route } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path={'/Login'} element={<LoginPage/>}/>
      </Routes>
    </div>
  )
}

export default AppRoutes
