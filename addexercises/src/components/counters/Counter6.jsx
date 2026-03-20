import React, { createContext, useContext, useReducer } from 'react';

const CounterContext = createContext();

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: Math.max(0, state.count - 1) };
    case 'reset': return initialState;
    default: return state;
  }
}

function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>;
}

function CounterDisplay() {
  const { state } = useContext(CounterContext);
  return <p>Count: <span id="count6">{state.count}</span></p>;
}

function CounterButtons() {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  );
}

function Counter6() {
  return (
    <div className="counter">
      <h3>6. useReducer + useContext</h3>
      <CounterProvider>
        <CounterDisplay />
        <CounterButtons />
      </CounterProvider>
    </div>
  );
}

export default Counter6;

