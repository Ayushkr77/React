import { useState } from "react"

export default function TodoList() {

    const [tasks, setTasks]=useState(["Breakfast","Shower","Study"]);
    const [newTask, setNewTask]=useState("");

    function handleInputChange(e) {
        setNewTask(e.target.value);
    }
    function addTask() {
        if(newTask.trim()!=="") {
            setTasks(t=>[...t,newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index) {
        const updatedTasks=tasks.filter((_,i)=>i!==index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index) {
        if(index>0) {
            const updatedTasks=[...tasks];
            [updatedTasks[index], updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index) {
        if(index<tasks.length-1) {
            const updatedTasks=[...tasks];
            [updatedTasks[index], updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }


    return (
        <>
            <h1>To-Do List</h1>

            <div>
                <input type="text" placeholder="Enter a task" value={newTask} onChange={handleInputChange}/>
                <button onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span>{task}</span>
                        <button onClick={()=>deleteTask(index)}>Delete</button>
                        <button onClick={()=>moveTaskUp(index)}>Up</button>
                        <button onClick={()=>moveTaskDown(index)}>Down</button>
                    </li>
                )}
            </ol>
        </>
    )
}