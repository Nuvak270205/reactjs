// store.js
import { createStore } from "redux";

function reducer(state = 0, action) {
  switch (action.type) {
    case "inc": return state + 1;
    case "dec": return state - 1;
    case "reset": return 0;
    default: return state;
  }
}

export const store = createStore(reducer);