import React from "react";
const Statc =({toDoList})=>{
    let countList = toDoList.length;
    return(
        <div className="stats">
            <p className="notify">
                {countList===0 ? "You have got everything off your list 👏" : `You have ${countList} tasks 💭`}
            </p>
        </div>
    )
}

export default Statc