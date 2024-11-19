import "../App.css";
import logo from "../public/Logo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";

function Header({ onAddTask }) {
  const [text, setText] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  const handleAddTask = () => {
    if(text !== ""){
       onAddTask(text);
       setText("");
    }
};

  return (
    <>
      <div className="header">
        <img src={logo} className={"logo"} alt="logo" />

        <form className="header__form" onSubmit={onSubmitHandler}>
          <input
            className={"todo__input"}
            placeholder={"Add a new task..."}
            type={"text"}
            value={text}
            onChange={onChangeHandler}
          />
          <button className={"input__button"} onClick={handleAddTask}>
            Create
            <AiOutlinePlusCircle size={26} />
          </button>
        </form>
      </div>
    </>
  );
}
export default Header;
