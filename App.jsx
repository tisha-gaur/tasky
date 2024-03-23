import TaskInput from "./components/TaskInput";
import React, { useState } from "react";
import TaskItem from "./components/TaskItem";
import Statc from "./components/stats";
function App() {
  const [ToDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDoList([...ToDoList, newTask]);
  }

function deleteTask(deleteTaskName){
  setToDoList(ToDoList.filter((task) => task.taskName !== deleteTaskName)); 
}

function toggleCheck(taskName) {
  setToDoList((prevToDoList) => prevToDoList.map((task) => task.taskName === taskName ? {...task, checked: !task.checked} : task));
}

  console.log(ToDoList);
  return (
    <>
      <div className="container">
        <h1>Task Manager</h1>
        <TaskInput addTask={addTask} />
        <div className="toDoList">
          {/* <span>To Do</span> */}
          <ul className="list-items">
            
            {ToDoList.map((task,key) => (<TaskItem task={task} key={key} deleteTask={deleteTask} toggleCheck={toggleCheck} />
            ))}
          </ul>
          {/* {ToDoList.length ===0? (<p className="notify">No tasks to do</p>):null} */}
        </div>
            <div className="notify"><Statc toDoList={ToDoList} className/></div>
      </div>
    </>
  );
}
export default App;
