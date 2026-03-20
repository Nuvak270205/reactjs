import React from 'react'
import { useCounter } from '../hook/store'
import { useSelector } from "react-redux";
function Counter1() {
  const count = useSelector(state => state);

  return (
    <div>
      <p>Counter1 : {count}</p>
    </div>
  )
}

export default Counter1
