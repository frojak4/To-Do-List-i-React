import React, {useState} from 'react';

function Todolist() {

    const [tasks, setTasks] = useState([])
    const [newTasks, setNewTasks] = useState("")

    function handleTaskInput(event) {
        setNewTasks(event.target.value)
    }

    function addTask() {
        if (newTasks) {
        setTasks(t => [...t, newTasks]);
        setNewTasks("");
    }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    return(<div className='container'>
                <h1 className='header'>To Do List</h1>
                <div className='inputfield'>
                    <input  type="text" 
                            placeholder="Enter new task"
                            onChange={handleTaskInput}
                            value={newTasks}
                            />
                    <button className="add-button" onClick={addTask}>Add</button>
                </div>
                <ul>
                    {tasks.map((task, index) => 
                    <>
                        <div className='task-container'>
                            <h3 key={index}>{task}</h3>
                            <button className='delete-button' onClick={() => deleteTask(index)}>🗑️</button>
                        </div>
                    </>
                    )}
                </ul>
           </div>)
}


export default Todolist