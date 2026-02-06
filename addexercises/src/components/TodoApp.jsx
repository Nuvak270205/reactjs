import React, { useState, useCallback, memo } from "react";
import "../assets/todo.css";

// Fake data
const initialTodos = Array.from({ length: 1000 }, (_, index) => ({
  id: index,
  text: "todo " + index,
  completed: false
}));

// Todo item (memoized)
// use memo để tránh việc re-render không cần thiết của các TodoItem khi props không thay đổi
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

  // useCallback để ghi nhớ hàm và tránh việc tạo lại hàm không cần thiết khi component re-render 
  // nếu không làm vậy mỗi lần render sẽ tạo hàm này mới khi truyền xuống TodoItem sẽ khiến TodoItem re-render lại mặc dù props không thay đổi
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
