import "../App.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

function Task({ task, onComplete, onDelete }) {
return (
    <div className={"task"}>
      <button className={"check__container"} onClick={() => onComplete(task.id)}>
        {task.completed ?  <BsFillCheckCircleFill size={25} style={{color:"green"}}/> : <div/>}
      </button>

      <p className={`${task.completed ? "line__decoration task__text" : "task__text"}`}>{task.title}</p>
      <button className={"delete__button"} onClick={() => onDelete(task.id)}>
        <TbTrash />
      </button>
    </div>
  );
}
export default Task;
