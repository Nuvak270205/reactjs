import React from 'react'
import { useNavigate } from 'react-router-dom'

function CheckOut() {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate('/')
  }


  return (
    <div>
      <p>Thanh toán thành công!</p>
      <button onClick={handleGoHome}>Quay về trang chủ</button>
    </div>
  )
}

export default CheckOut
