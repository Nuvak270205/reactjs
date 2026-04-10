import React, {useEffect, useState} from 'react'
import { Outlet, Link, useNavigate} from 'react-router-dom'
import './main.css'

const menu = [
  {
    name: 'Profile',
    to : '/dashboard/profile'
  },
  {
    name: 'Orders',
    to : '/dashboard/orders'
  },
  {
    name: 'Settings',
    to : '/dashboard/settings'
  }
]

function DefaultLayout() {
    const [active, setActive] = useState()
    const navigate = useNavigate()

  return (
    <div>
      <div className='menu'>
        {menu.map((item, index) => (
          <Link key={index} onClick={() => setActive(index)} className={`nav-link ${index === active ? 'active' : ''}`} to={item.to}>{item.name}</Link>
        ))}
      </div>

      <Outlet />
    </div>
  )
}

export default DefaultLayout
