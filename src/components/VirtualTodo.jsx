import React from "react";
import "./Todo.css";
export default function VirtualTodo({ todos, handleDelete }) {
  return (
    <>
      {todos.map((item) => (
        <div className="Todoshka" key={item.id}>
          <div className="Todonome">
            <button
              className="buttonDelete"
              onClick={() => handleDelete(item.id)}
            >
              Удалить
            </button>
            <span className="itemtodo">{item.title}</span>
          </div>
          <div className="hr"></div>
        </div>
      ))}
    </>
  );
}
