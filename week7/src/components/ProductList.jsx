import React from 'react'
import { useSetRecoilState } from 'recoil'
import { cartAtom } from '../recoil/atom/CartAtom'

const PRODUCTS = [
  { id: 1, name: 'Apple', price: 1000 },
  { id: 2, name: 'Banana', price: 500 },
  { id: 3, name: 'Orange', price: 800 },
]

function ProductList() {
  const setCart = useSetRecoilState(cartAtom);

  function addToCart(product) {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  return (
    <div>
      <h2>Products</h2>
      {PRODUCTS.map(p => (
        <div key={p.id}>
          <span>{p.name} - {p.price}</span>
          <button onClick={() => addToCart(p)}>Add</button>
        </div>
      ))}
    </div>
  )
}

export default ProductList
