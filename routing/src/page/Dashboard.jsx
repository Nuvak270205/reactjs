import React from 'react'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      Header
      <Outlet />
      Footer
    </div>
  )
}


export default Dashboard
