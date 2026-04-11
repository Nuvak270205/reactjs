import React from 'react'
import { useRecoilValue } from 'recoil'
import { counterAtom } from '../recoil/atom/CounterAtom'

function ComA() {
    const counter = useRecoilValue(counterAtom);
  return (
    <div>
      ComA
      <div>
        {counter}
      </div>
    </div>
  )
}

export default ComA
