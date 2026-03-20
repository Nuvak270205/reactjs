import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: Math.max(0, state.count - 1) };
    case 'reset': return initialState;
    default: return state;
  }
}

function Counter2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter">
      <h3>2. useReducer</h3>
      <p>Count: <span id="count2">{state.count}</span></p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default Counter2;

