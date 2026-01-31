import { useState } from 'react'
import Information from './components/Information.jsx'
import Time from './components/Time.jsx'
import Search_Filter from './components/Search_Filter.jsx'
import TodoApp from './components/TodoApp.jsx'
import Stopwatch from './components/Stopwatch.jsx'
import FetchUsers from './components/FetchUsers.jsx'
import ThemeSwitcher from './components/ThemeSwitcher.jsx'

function App() {

  
  return (
    <>
      <Information />
      <Time />
      <Search_Filter />
      <TodoApp />
      <Stopwatch />
      <FetchUsers />
      <ThemeSwitcher />
    </>
  )
}

export default App
