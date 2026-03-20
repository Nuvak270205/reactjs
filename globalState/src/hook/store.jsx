import { createContext, useContext, useReducer } from "react";

const CounterContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "inc": return state + 1;
    case "dec": return state - 1;
    case "reset": return 0;
    default: return state;
  }
}

export function CounterProvider({ children }) {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <CounterContext.Provider value={{ count, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

export const useCounter = () => useContext(CounterContext);