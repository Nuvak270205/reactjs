import React, { useState } from 'react';

function Counter1() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h3>1. useState (Basic)</h3>
      <p>Count: <span id="count1">{count}</span></p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(Math.max(0, count - 1))}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter1;

