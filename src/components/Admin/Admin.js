import SideBar from './SideBar'
import './Admin.scss'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Toastify from '../Toastify'

const Admin = props => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className='admin-container'>
      <div className='admin-sidebar'>
        <SideBar collapsed={collapsed} />
      </div>
      <div className='admin-content'>
        <FaBars onClick={() => setCollapsed(!collapsed)} />
        <Outlet />
      </div>
      <Toastify />
    </div>
  )
}
export default Admin
