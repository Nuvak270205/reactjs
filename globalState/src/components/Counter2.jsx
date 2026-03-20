import React from 'react'
import { useCounter } from '../hook/store'

function Counter2() {
  const { count, dispatch } = useCounter();
  return (
    <div>
      <p>Counter2 : {count}</p>
    </div>
  )
}

export default Counter2
