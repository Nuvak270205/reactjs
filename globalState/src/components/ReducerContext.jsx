import React from 'react'
import { CounterProvider, useCounter } from '../hook/store'
import Counter1 from './Counter1.jsx'
import Counter2 from './Counter2.jsx'

function ReducerContent() {
  const { count, dispatch } = useCounter();

  return (
    <>
      <Counter1 />
      <Counter2 />
      <p>Counter app: {count}</p>
      <button onClick={() => dispatch({ type: 'inc' })}>+</button>
      <button onClick={() => dispatch({ type: 'dec' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </>
  );
}

function ReducerContext() {
  return (
    <CounterProvider>
      <ReducerContent />
    </CounterProvider>
  )
}

export default ReducerContext
