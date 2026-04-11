import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoAtom } from '../recoil/atom/TodoAtom'

function Todoitem({ todo }) {
  const setTodos = useSetRecoilState(todoAtom)
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(todo.title)
  const [editDescription, setEditDescription] = useState(todo.description)

  function deleteTodo() {
    setTodos(prev => prev.filter(i => i.id !== todo.id))
  }

  function save() {
    setTodos(prev => prev.map(i => i.id === todo.id ? { ...i, title: editTitle, description: editDescription } : i))
    setIsEditing(false)
  }

  function cancel() {
    setEditTitle(todo.title)
    setEditDescription(todo.description)
    setIsEditing(false)
  }

  return (
    <div>
      {isEditing ? (
        <>
          <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
          <input value={editDescription} onChange={(e) => setEditDescription(e.target.value)} />
          <button onClick={save}>Save</button>
          <button onClick={cancel}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={deleteTodo}>Delete</button>
        </>
      )}
    </div>
  )
}

export default Todoitem
