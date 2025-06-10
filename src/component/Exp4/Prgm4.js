import React, { useState } from "react";

const Prgm4 = () => {

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, { text: newTask, isCompleted: false }])
            setNewTask('')
        }
    }

    const toggleTaskCompletion = (index) => {
        const updating = tasks.map((task, i) => i === index ? { ...task, isCompleted: !task.isCompleted } : task)
        setTasks(updating)
    }

    const deleteTask = (index) => {
        const updating = tasks.filter((_, i) => i !== index)
        setTasks(updating)
    }

    return (
        <div4>
            <h1>4. To-do List</h1>

            <div41>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add new Task..."
                />
                <button onClick={addTask}>Add Task</button>
            </div41>

            <ul>
                {tasks.map((task, index) => (
                    <li
                        style={{ backgroundColor: task.isCompleted ? '#9df79d' : '#f8bab5' }}
                        key={index}>
                        <span
                            onClick={() => toggleTaskCompletion(index)}
                            style={{ textDecoration: task.isCompleted ? 'line-through' : '' }}
                        >{task.text}
                        </span>

                        <button
                            onClick={() => deleteTask(index)}
                        >Delete
                        </button>
                    </li>
                ))}
            </ul>

        </div4>
    )
}

export default Prgm4