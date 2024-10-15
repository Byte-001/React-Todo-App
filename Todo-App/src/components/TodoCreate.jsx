import React from "react";
import "../css/todo.css";
import { useState } from "react";

export default function TodoCreate({ onCreateTodo }) {
  const [todo, setTodo] = useState("");

  const clearInput= () => {
     setTodo("");
  }

  const addTodo = () => {
    if (!todo) return;
    const newTodo = {
      id: Math.floor(Math.random() * 999999),
      content: todo    
    };
    onCreateTodo(newTodo);
    clearInput()
  };

  return (
    <div className="todo-create">
      <input
        className="todo-input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Bir sey girin..."
      />
      <button className="todo-button" type="submit" onClick={addTodo}>
        TODO EKLE
      </button>
    </div>
  );
}
