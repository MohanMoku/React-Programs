import React, { useState } from 'react'
import './Exp4.css'
import homeImg from '../../assets/home.png'

const Exp4 = () => {

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, { text: newTask, completed: false }])
            setNewTask('')
        }
    }

    const toggleTaskCompletion = (index) => {
        const updatedTasks = tasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task)
        setTasks(updatedTasks)
    }

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((task, i) => i !== index)
        setTasks(updatedTasks)
    }

    const goHome = () => window.location.href = '/';

    return (
        <div className='exp4'>
            <div1>
            <img src={homeImg} alt="home" onClick={goHome}/>
                <h1>4. To-Do List</h1>
            </div1>

            <div>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task..."
                    style={{
                        padding: '10px',
                        width: '70%',
                        marginRight: '10px',
                        fontSize: '16px'
                    }}
                />

                <button
                    onClick={addTask}
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: '#4caf50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Add Task
                </button>

            </div>

            <ul style={{
                listStyle: 'none',
                padding: '0',
                marginTop: '0',
            }}>
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '10px',
                            margin: '10px 0',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            backgroundColor: task.completed ? '#4caf50' : 'white',
                        }}
                    >
                        <span
                            onClick={() => toggleTaskCompletion(index)}
                            style={{
                                textDecoration: task.completed ? 'line-through' : 'none',
                                color: 'black',
                                cursor: 'pointer',
                                flexGrow: 'left',
                            }}
                        >
                            {task.text}
                        </span>
                        <button
                            onClick={() => deleteTask(index)}
                            style={{
                                padding: '5px 10px',
                                fontSize: '16px',
                                backgroundColor: '#f44336',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                        >Delete</button>

                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Exp4