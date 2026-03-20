import React from 'react'
import { useRecoilState } from "recoil";
import { countState } from "../Recoil/store";
function Counter2() {
  const [count, setCount] = useRecoilState(countState);
  return (
    <div>
      <p>Counter2 : {count}</p>
    </div>
  )
}

export default Counter2
