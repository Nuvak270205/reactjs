import React, { useContext, createContext, useState } from 'react';

const CountContext = createContext();

function CounterProvider({ children }) {
  const [count, setCount] = useState(0);
  const value = { count, setCount };
  return <CountContext.Provider value={value}>{children}</CountContext.Provider>;
}

function CountDisplay() {
  const { count } = useContext(CountContext);
  return <p>Count: <span id="count3">{count}</span></p>;
}

function CounterButtons() {
  const { count, setCount } = useContext(CountContext);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(Math.max(0, count - 1))}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

function Counter3() {
  return (
    <div className="counter">
      <h3>3. useContext</h3>
      <CounterProvider>
        <CountDisplay />
        <CounterButtons />
      </CounterProvider>
    </div>
  );
}

export default Counter3;

