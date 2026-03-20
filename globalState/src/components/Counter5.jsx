import React from 'react'
import { useRecoilState } from "recoil";
import { countState } from "../Recoil/store";
function Counter1() {
  const [count, setCount] = useRecoilState(countState);

  return (
    <div>
      <p>Counter1 : {count}</p>
    </div>
  )
}

export default Counter1
