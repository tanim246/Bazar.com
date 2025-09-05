
import { Outlet } from 'react-router'
import Navber from '../Components/shared/Navber.jsx'


const MainLayout = () => {
  return (
    <div>
        <Navber />
        <Outlet />
        {/* <Contact /> */}
        {/* <Footer /> */}
    </div>
  )
}

export default MainLayout