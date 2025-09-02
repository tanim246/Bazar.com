import React from 'react'
import { Outlet } from 'react-router'
import Navber from '../components/shared/Navber'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact'

const MainLayout = () => {
  return (
    <div>
        <Navber />
        <Outlet />
        <Contact />
        <Footer />
    </div>
  )
}

export default MainLayout