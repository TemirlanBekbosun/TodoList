import { useState } from "react";
import "./Todo.css";
export default function TodoForm({ handleAddTodo, handleClearAll }) {
  const [todoValue, setTodoValue] = useState("");

  const handleChange = (event) => {
    setTodoValue(event.target.value);
  };

  const submitTodo = (event) => {
    event.preventDefault();
    if (todoValue.trim()) {
      handleAddTodo(todoValue);
      setTodoValue("");
    }
  };

  return (
    <form onSubmit={submitTodo}>
      <div className="inputTodomain">
        <input
          className="inputTodo"
          value={todoValue}
          onChange={handleChange}
          type="text"
          placeholder="Добавить новый элемент списка"
        />
        <div className="todobutton">
          <button className="buttonadd" type="submit">
            add todo
          </button>
          <button
            className="buttonclear"
            type="button"
            onClick={handleClearAll}
          >
            clear all
          </button>
        </div>
      </div>
    </form>
  );
}
