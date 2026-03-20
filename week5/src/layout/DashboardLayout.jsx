import React, {useState} from 'react'
import { Outlet, Link} from 'react-router-dom'
import './main.css'

const menu = [
  {
    name: 'Dashboard',
    to : '/'
  },
  {
    name: 'Profile',
    to : '/profile'
  },
  {
    name: 'Orders',
    to : '/orders'
  },
  {
    name: 'Settings',
    to : '/settings'
  }
]

function DefaultLayout() {
    const [active, setActive] = useState(0)
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
