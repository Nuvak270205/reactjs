import React from 'react'
import { RecoilRoot, useRecoilState } from "recoil";
import { countState } from "../Recoil/store";
import Counter1 from './Counter5';
import Counter2 from './Counter6';
function Content() {
    const [count, setCount] = useRecoilState(countState);
  return (
    <>
      <Counter1 />
      <Counter2 />
      <p>Counter app: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <button onClick={() => setCount(c => c - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  )
}

function Recoil() {
  return (
    <RecoilRoot>
        <Content />
    </RecoilRoot>
  )
}

export default Recoil
