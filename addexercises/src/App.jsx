import { useState } from 'react'
import Counter from './components/Counter.jsx'
import Time from './components/Time.jsx'
import TodoApp from './components/TodoApp.jsx'
import FormMemo from './components/FormMemo.jsx'
import FetchUsers from './components/FetchUsers.jsx'
import UserFetch from './components/UserFetch.jsx'
import UserAxios from './components/UserAxios.jsx'
import UserFetchAsync from './components/UserFetch Async.jsx'
import Counter1 from './components/counters/Counter1.jsx'
import Counter2 from './components/counters/Counter2.jsx'
import Counter3 from './components/counters/Counter3.jsx'
import Counter4 from './components/counters/Counter4.jsx'
import Counter5 from './components/counters/Counter5.jsx'
import Counter6 from './components/counters/Counter6.jsx'
function App() {

  
  return (
    <>
      <h1>useState</h1>
      <Counter />
      <h1>useEffect</h1>
      <Time />
      <div>Memo, useCallback</div>
      <TodoApp />
      <h1>useRef, useMemo</h1>
      <FormMemo />
      <h1>useReducer</h1>
      <FetchUsers />
      <h1>useEffect Fetch Users</h1>
      <UserFetch />
      <h1>Axios Fetch Users</h1>
      <UserAxios />
      <h1>Async/Await Fetch Users</h1>
      <UserFetchAsync />
      <h1>6 Different Counters</h1>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center'}}>
        <Counter1 />
        <Counter2 />
        <Counter3 />
        <Counter4 />
        <Counter5 />
        <Counter6 />
      </div>
    </>
  )
}

export default App
