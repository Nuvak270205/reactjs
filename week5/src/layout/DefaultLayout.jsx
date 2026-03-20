import React, {useState} from 'react'
import { Outlet, Link} from 'react-router-dom'
import './main.css'

const menu = [
  {
    name: 'Home',
    to : '/'
  },
  {
    name: 'About',
    to : '/about'
  },
  {
    name: 'Contact',
    to : '/contact'
  },
  {
    name: 'Produce',
    to : '/produce'
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
