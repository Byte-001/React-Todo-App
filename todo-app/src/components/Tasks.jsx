import "../App.css";

function Tasks(){
    return (
        <div className={"tasks__container"}>
            <div className={"tasks__header"}>
                <h3 className={"created__title"}>Created Tasks <span className={"span__number"}>5</span></h3>
                <h3 className={"completed__title"}>Completed <span className={"span__number"}>2 of 5</span></h3>
            </div>
        </div>
    )
}
export default Tasks;