import React from "react";
import "../css/Todo.css";
import { IoTrashBin } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";

export default function Todo({ todo, onRemoveTodo }) {
  
  const {id, content} = todo;

  const removeTodo = () => {
     onRemoveTodo(id);
  }

  return (
    <div className="todo">
      <div>{content}</div>
      <div>
        <button className="todo-tick-btn">
          <SiTicktick className="todo-icon" />
        </button>
        <button className="todo-bin-btn">
          <IoTrashBin className="todo-icon" onClick={removeTodo}/>
        </button>
      </div>
    </div>
  );
}
