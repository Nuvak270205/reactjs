import React from 'react'
import { useSetRecoilState } from 'recoil'
import { cartAtom } from '../recoil/atom/CartAtom'

function CartItem({ item }) {
  const setCart = useSetRecoilState(cartAtom);

  function increase() {
    setCart(prev => prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
  }
  function decrease() {
    setCart(prev => {
      return prev.flatMap(i => {
        if (i.id !== item.id) return i;
        const q = i.quantity - 1;
        if (q <= 0) return [];
        return { ...i, quantity: q };
      })
    });
  }
  function remove() {
    setCart(prev => prev.filter(i => i.id !== item.id));
  }

  return (
    <div>
      <span>{item.name} - {item.price} x {item.quantity}</span>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={remove}>Remove</button>
    </div>
  )
}

export default CartItem
