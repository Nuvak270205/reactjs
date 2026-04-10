import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ProduceDetail() {
    const {id} = useParams()
    const navigate = useNavigate()

    const handleCheckout = () => {
        navigate('/checkout')
    }
  return (
    <div>
      <p>
        {`Produce Detail ${id}`}
      </p>

      <button onClick={handleCheckout}>Mua</button>
    </div>
    
  )
}

export default ProduceDetail
