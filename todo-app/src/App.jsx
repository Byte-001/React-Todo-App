import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskTitle) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        completed: false,
      },
    ]);
  };

  const toggleComplete = (taskID) => {
     const newTasks = tasks.map((task) => {
         if (task.id === taskID) {
            return {
               ...task,
               completed: !task.completed,
            };
         }
         return task;
     });
     setTasks(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks} onComplete={toggleComplete}/>
    </>
  );
}

export default App;
