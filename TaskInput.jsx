import React, { useState } from "react";

const TaskInput = ({addTask}) => {
    const [task, setTask] = useState('');

    // console.log(task);
    function handleInputValue(e) {
        setTask(e.target.value);
    }

    function handleAddTask(event){
        event.preventDefault();
        if(task === '') return;
        addTask(task);
        setTask('');
    }

    return (
        <form className="inputField" onSubmit={handleAddTask}>
            <input type="text" value={task} onChange={handleInputValue} />
            <button>+</button>
        </form>
    )
}

export default TaskInput