import React from 'react'
import { Outlet } from 'react-router'
import Navber from '../components/shared/Navber'
import Footer from '../Components/Footer'

const MainLayout = () => {
  return (
    <div>
        <Navber />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout