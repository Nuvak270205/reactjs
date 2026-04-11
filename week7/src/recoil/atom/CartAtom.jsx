import { atom } from 'recoil';

// Cart items: { id, name, price, quantity }
export const cartAtom = atom({
  key: 'cartAtom',
  default: [],
});
