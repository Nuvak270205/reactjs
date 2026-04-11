import { selector } from "recoil";
import { cartAtom } from "../atom/CartAtom";

export const cartTotalSelector = selector({
  key: "cartTotalSelector",
  get: ({ get }) => {
    const cart = get(cartAtom);
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  },
});