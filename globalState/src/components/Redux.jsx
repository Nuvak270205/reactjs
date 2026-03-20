import React from 'react'
import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "../redux/store";
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
            <button onClick={() => dispatch({ type: 'inc' })}>+</button>
            <button onClick={() => dispatch({ type: 'dec' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>        
        </>
    )
}

function Redux() {
  return (
    <Provider store={store}>
        <Content />
    </Provider>
  )
}

export default Redux
