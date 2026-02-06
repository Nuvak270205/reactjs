import React from 'react'
import { useState } from 'react';

function Counter() {
    // useState giúp chúng ta tạo ra một state trong function component lưu trữ giá trị đếm hoặc count
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }
  const handleDecrement = () => {
        if(count === 0) return;
    setCount(count - 1);
  }

  return (
    <div>
        <div>{count}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter
