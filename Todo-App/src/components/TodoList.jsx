import React from "react";
import Todo from "./Todo";
import "../css/todo.css";

export default function TodoList({todos}) {
  return (
    <div className="todo-list">
      {
        todos && todos.map(
           (todo) => {
              return <Todo key={todo.id} todoText={todo.content}/>
           }
        )
      }
    </div>
  );
}
