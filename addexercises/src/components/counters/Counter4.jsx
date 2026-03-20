import React, { useState } from 'react';

function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => Math.max(0, c - 1));
  const reset = () => setCount(initialCount);
  return { count, increment, decrement, reset };
}

function Counter4() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="counter">
      <h3>4. Custom Hook (useCounter)</h3>
      <p>Count: <span id="count4">{count}</span></p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter4;

