import React from 'react'
import { useCounter } from '../hook/store'
import { useSelector } from "react-redux";
function Counter2() {
  const count = useSelector(state => state);
  return (
    <div>
      <p>Counter2 : {count}</p>
    </div>
  )
}

export default Counter2
