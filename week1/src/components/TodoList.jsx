import React, {useState} from 'react'

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    } else {
        alert("Nhập công việc cần thêm");
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((item, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button style={{ marginLeft: '10px' }} onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemoveTodo(index)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
