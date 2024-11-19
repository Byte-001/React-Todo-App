import "../App.css";
import Task from "./Task.jsx";

function Tasks({ tasks, onComplete}) {
  const taskQuantity = Object.values(tasks).length; 
  const completedTasks = Object.values(tasks).filter(task => task.completed).length;  
  
  return (
    <div className={"tasks__container"}>
      <div className={"tasks__header"}>
        <h3 className={"created__title"}>
          Created Tasks <span className={"span__number"}>{ taskQuantity }</span>
        </h3>
        <h3 className={"completed__title"}>
          Completed <span className={"span__number"}>{completedTasks} of {taskQuantity}</span>
        </h3>
      </div>
      <div className={"task__list"}>
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              onComplete={onComplete}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Tasks;
