import "../App.css";
import { TbTrash } from "react-icons/tb";

function Task(){
    return (
       <div className={"task"}>
           <button className={"check__container"}>
               <div />
           </button>

           <p className={"task__text"}></p>
           <button className={"delete__button"}>
               <TbTrash />
           </button>
       </div>
   )
}
export default Task;