import React from 'react'
import { Provider, useSelector, useDispatch } from "react-redux";
import { store,  inc, dec, reset } from "../redux-toolkit/store";
import Counter1 from './Counter3';
import Counter2 from './Counter4';
function Content(){
  const count = useSelector(state => state);
  const dispatch = useDispatch();
    return (
      <>
        <Counter1 />
        <Counter2 />
        <p>Counter app: {count}</p>
        <button onClick={() => dispatch(inc())}>+</button>
        <button onClick={() => dispatch(dec())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </>
    )
  }
        
function Redux_toolkit() {
  return (
      <Provider store={store}>
        <Content />
      </Provider>
    
  )
}

export default Redux_toolkit
