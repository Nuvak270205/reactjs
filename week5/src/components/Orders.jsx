import React from 'react'
import { useNavigate } from 'react-router-dom'

function Orders() {
    const navigate = useNavigate()

    const handleCheckout = () => {
        navigate('/checkout')
    }
  return (
    <div>
      Orders
      <button onClick={handleCheckout}>Thanh toán</button>
    </div>
  )
}

export default Orders
