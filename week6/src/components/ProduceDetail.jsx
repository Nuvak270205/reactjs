import React from 'react'
import { useParams } from 'react-router-dom'

function ProduceDetail() {
    const {id} = useParams()
  return (
    <div>
      {`Produce Detail ${id}`}
    </div>
  )
}

export default ProduceDetail
