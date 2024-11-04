import  "../App.css";
import logo from "../assets/logo.svg";

function Header() {
    return (
        <>
            <div className="header">
                <img src={logo} className={"logo"} alt="logo" />

                <form className="header__form">
                    <input className={"todo__input"} placeholder={"add a new task..."} type={"text"}/>
                    <button className={"input__button"}></button>
                </form>
            </div>
        </>
    )
}
export default Header;