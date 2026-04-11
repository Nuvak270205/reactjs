import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { themeAtom } from './recoil/atom/ThemeAtom' 

import './App.css'
import ComA from './components/ComA'
import ComB from './components/ComB'
import Login from './components/Login'
import Logout from './components/Logout'
import User from './components/User'
import { useRecoilValue } from 'recoil'
import { counterAtom } from './recoil/atom/CounterAtom'
import { userAtom } from './recoil/atom/UserAtom'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { cartAtom } from './recoil/atom/CartAtom'

function App() {
  const [theme, setTheme] = useRecoilState(themeAtom)
  const user = useRecoilValue(userAtom);

  const handleTheme = () => {
    setTheme(theme == 'light' ? "dark" : 'light')
    localStorage.setItem("theme", theme == 'light' ? "dark" : 'light')
  }

  useEffect(() => {
    localStorage.getItem("theme") && setTheme(localStorage.getItem("theme"))
  }, [])

  return (
    <div className={theme == 'light' ? "light" : "dark"}>
      <Login />
      <Logout />
      <h2 className={theme == 'light' ? "light" : "dark"}>Bai 1</h2>
      <ComA />
      <ComB />
      <button onClick={handleTheme}>toggle</button>
      {user ? <User /> : <p>Please log in to see user information.</p>}

      <h2>Todo List</h2>
      <TodoInput />
      <TodoList />

      <h2>Shopping Cart</h2>
      <Cart />
      <ProductList />
    </div>
  )
}

export default App
