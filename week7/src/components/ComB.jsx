import React from 'react'
import { useRecoilState } from 'recoil'
import { counterAtom } from '../recoil/atom/CounterAtom'


function ComB() {
    const [counter, setCounter] = useRecoilState(counterAtom);

    const handleInc = () => {
        setCounter(counter + 1)
    }

    const handleDec = () => {
        setCounter(counter - 1)
    }
  return (
    <div>
      ComB
      <button onClick={handleInc}>Inc</button>
      <button onClick={handleDec}>Dec</button>
    </div>
  )
}

export default ComB
