import React, {useState, useEffect, use} from 'react'

function Time() {
    const [connt, setConnt] = useState(0);
    // useEffect chạy một lần khi component được gắn vào DOM khi mảng phụ thuộc rỗng
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setConnt(prevConnt => prevConnt + 1);
    //     }, 1000);
    //     return () => clearInterval(timer);
    // }, []);

    // useEffect chạy mỗi khi component re-render khi không có mảng phụ thuộc
    useEffect(() => {
      setTimeout(() => {
        setConnt(prevConnt => prevConnt + 1);
      }, 1000);
    });
    // useEffect chạy mỗi khi giá trị connt thay đổi
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setConnt(prevConnt => prevConnt + 1);
    //     }, 1000);
    //     return () => clearInterval(timer);
    // }, [connt]);
  return (
    <div>
      <button>{connt}</button>
    </div>
  )
}

export default Time
