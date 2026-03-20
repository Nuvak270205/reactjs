import React from 'react'
import { useCounter } from '../hook/store'
function Counter1() {
  const { count, dispatch } = useCounter();

  return (
    <div>
      <p>Counter1 : {count}</p>
    </div>
  )
}

export default Counter1
