import React from 'react'
import Todoitem from './Todoitem'
import { useRecoilValue } from 'recoil'
import { todoAtom } from '../recoil/atom/TodoAtom'

function TodoList() {
    const todos = useRecoilValue(todoAtom);
  return (
    <div>
      {todos.map((todo) => (
        <Todoitem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
