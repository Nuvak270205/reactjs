import React, {useEffect} from 'react'
import {useNavigate } from 'react-router-dom'
import '../layout/main.css'

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
function Dashboard() {

  const navigate = useNavigate()

    useEffect(() => {
      navigate("/dashboard")
    }, [])

  return (
    <div>
      
    </div>
  )
}

export default Dashboard
