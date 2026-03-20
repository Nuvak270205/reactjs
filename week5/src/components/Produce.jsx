import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const produceList = [
  { id: 1, name: 'Iphone', price: 1.5 },
  { id: 2, name: 'Samsung', price: 0.5 },
  { id: 3, name: 'Laptop', price: 0.8 },
]
function Produce() {
  return (
    <div>
      <h1>Produce</h1>
        <ul>
            {produceList.map((item) => (
                <li key={item.id}>
                    <Link to={`/produce/${item.id}`}>
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
        <Outlet />
    </div>
  )
}

export default Produce
