import { useState } from "react";
import TodoForm from "./components/TodoForm";
import VirtualTodo from "./components/VirtualTodo";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (incomingData) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: crypto.randomUUID(), title: incomingData },
    ]);
  };

  const handleDelete = (todoId) => {
    setTodos(todos.filter((item) => item.id !== todoId));
  };

  const handleClearAll = () => {
    setTodos([]);
  };

  return (
    <div className="Todomain">
      <div className="Todoform">
        <h1 className="todotext">Todo List</h1>
        <TodoForm
          handleAddTodo={handleAddTodo}
          handleClearAll={handleClearAll}
        />
        <VirtualTodo todos={todos} handleDelete={handleDelete} />
      </div>
    </div>
  );
}
