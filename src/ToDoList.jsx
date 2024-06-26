import React, {useState} from "react"
import { Trash2 } from 'lucide-react';
import { ArrowBigDown } from "lucide-react";
import { ArrowBigUp } from "lucide-react";


function ToDoList(){

const[tasks, setTasks] = useState(["Eat Food", "Walk neighbor's dog"]);
const[newTask, setNewTask] = useState("");

function handleInputChange(event){
    console.log(event.target.value);
    setNewTask(event.target.value);
}
function addTask(){
    if(newTask.trim() !== ""){
        setTasks(t => [...t, newTask]);
        setNewTask("");
    }
}
function deleteTask(index){
    const updatedTask = tasks.filter((_,i) => i !== index)
    setTasks(updatedTask);
}
function moveTaskUp(index){
    if(index > 0){
    const updatedTask = [...tasks];
    [updatedTask[index], updatedTask[index-1]] = [updatedTask[index-1], updatedTask[index]];
    setTasks(updatedTask);
    }
}
function moveTaskDown(index){
    if(index < tasks.length -1){
    const updatedTask = [...tasks];
    [updatedTask[index+1], updatedTask[index]] = [updatedTask[index], updatedTask[index+1]];
    setTasks(updatedTask);
    }
}


    return (
     <div className="to-do-list">
        <h1>To-Do List</h1>
        <div>
            <input 
            type ="text"
            placeholder="Enter the task"
            onChange={handleInputChange}
            />
            <button 
            className= "add-button"
            onClick={addTask}>
                Add
           </button>
        </div>
        
        <ol>
            {tasks.map((task,index) => 
                <li key = {index}>
                <span className="text">
                    {task}
                </span>
                <button 
                    className = "delete-button"
                    onClick = {() => deleteTask(index)}>
                    <Trash2 color="#e6360a" />
                </button>

                <button 
                    className = "move-button"
                    onClick = {() => moveTaskUp(index)}>
                    <ArrowBigUp />
                </button>

                <button 
                    className = "move-button"
                    onClick = {() => moveTaskDown(index)}>
<                   ArrowBigDown />
                </button>

                </li>
            )}
        </ol>
         
     </div>   
    );
}

export default ToDoList