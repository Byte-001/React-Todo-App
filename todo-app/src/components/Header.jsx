import  "../App.css";
import logo from "../assets/Logo.svg"
import { AiOutlinePlusCircle } from "react-icons/ai";


function Header() {
    return (
        <>
            <div className="header">
                <img src={logo} className={"logo"} alt="logo" />

                <form className="header__form">
                    <input className={"todo__input"} placeholder={"Add a new task..."} type={"text"}/>
                    <button className={"input__button"}>Create<AiOutlinePlusCircle size={26} />
                    </button>
                </form>
            </div>
        </>
    )
}
export default Header;