import React, { useRef, useEffect } from 'react';

function Counter5() {
  const countRef = useRef(0);
  const displayRef = useRef(null);

  const increment = () => {
    countRef.current += 1;
    displayRef.current.textContent = countRef.current;
  };

  const decrement = () => {
    if (countRef.current > 0) {
      countRef.current -= 1;
      displayRef.current.textContent = countRef.current;
    }
  };

  const reset = () => {
    countRef.current = 0;
    displayRef.current.textContent = 0;
  };

  return (
    <div className="counter">
      <h3>5. useRef (non-reactive)</h3>
      <p>Count: <span ref={displayRef} id="count5">0</span></p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter5;

