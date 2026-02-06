import React from 'react'
import { useState, useRef, useEffect, useMemo } from 'react';

function FormMemo(){
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);

  // useRef để tạo tham chiếu đến phần tử input
  const input = useRef();

  const handleChange = () => {
    setProducts(prev => {
      if (!name || !price) {
        alert("Vui lòng điền đầy đủ thông tin");
        return prev;
      }
      const newProduct = { name, price };
      const updatedProducts = [...prev, newProduct];
      setName('');
      setPrice('');
      // Tự động focus vào input sau khi thêm sản phẩm
      input.current.focus();
      return updatedProducts;
    })
  }
  useEffect(() => {
    input.current.focus();
  },[]);
  // useMemo để ghi nhớ giá trị tính toán tổng và chỉ tính lại khi mảng products thay đổi
  const total = useMemo(() => {
    return products.reduce((acc, curr) => acc + parseFloat(curr.price || 0), 0);
  }, [products]);
 
  return (
    <div>
      <input
      ref={input}
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Nhập tên sản phẩm'
      />
      <br />
      <input
        type='text'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder='Nhập giá'
      />
      <br />
      <button onClick={handleChange}>
        Change
      </button>
      <br />
      <h3>Total: {total}</h3>
      <ul>
        {
          products.map((product, index) => (
            <li key={index}>
              {product.name} - {product.price}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default FormMemo
