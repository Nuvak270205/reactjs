import React, {useState} from 'react'

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <p style={{ color: count >= 10 ? 'red': 'white' }}>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => {
        if (count > 0) {
          setCount(count - 1);
        } else {
            alert("Count không được nhỏ hơn 0");
        }
      }}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter
