import React, {useState, useEffect} from 'react'

function Time() {
    const [connt, setConnt] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setConnt(prevConnt => prevConnt + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);
  return (
    <div>
      <button>{connt}</button>
    </div>
  )
}

export default Time
