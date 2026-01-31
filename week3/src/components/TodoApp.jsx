import React, { useState, useCallback, memo } from "react";
import "../assets/todo.css";

// Fake data
const initialTodos = Array.from({ length: 1000 }, (_, index) => ({
  id: index,
  text: "todo " + index,
  completed: false
}));

// Todo item (memoized)
const TodoItem = memo(function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <div>
        <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
        />

        <label
        className={
            todo.completed ? "completed" : ""
        }>{todo.text}</label>
      </div>

      <button onClick={() => onDelete(todo.id)}>
        delete
      </button>
    </div>
  );
});

function TodoApp() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = useCallback((id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  return (
    <div>
      <h1>Todo List Performance</h1>

      <div className="todolist">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
