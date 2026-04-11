import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { todoAtom } from '../recoil/atom/TodoAtom';

function TodoInput() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [todos, setTodos] = useRecoilState(todoAtom);

  return (
    <div>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={() => {
        const newTodo = {
          id: Date.now(),
          title: title,
          description: description
        };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setTitle('');
        setDescription('');
      }}>Add Todo</button>
    </div>
  )
}

export default TodoInput
