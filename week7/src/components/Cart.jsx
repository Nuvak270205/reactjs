import React from 'react'
import { useRecoilValue } from 'recoil'
import { cartAtom } from '../recoil/atom/CartAtom'
import CartItem from './CartItem'
import { cartTotalSelector } from '../recoil/selectors/CartSelector'

function Cart() {
  const items = useRecoilValue(cartAtom);
  const total = useRecoilValue(cartTotalSelector);

  return (
    <div>
      <h2>Cart</h2>
      {items.length === 0 ? <p>Empty</p> : items.map(it => <CartItem key={it.id} item={it} />)}
      <h3>Total: {total}</h3>
    </div>
  )
}

export default Cart
