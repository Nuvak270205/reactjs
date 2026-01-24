import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import StudentInfo from './components/StudentInfo'
import Counter from './components/Counter'
import TodoList from './components/TodoList'

function App() {
  const student = {
    name: 'Nguyễn Thái Dương',
    id: 123456,
    class: 'DHKTPM19B'  
  }
  console.log(student);
  
  return (
    <>
      <Header/>
      <StudentInfo
        name={student.name}
        id={student.id}
        class={student.class}
      />
      <Counter />
      <TodoList />
      <Footer />
    </>
  )
}

export default App
