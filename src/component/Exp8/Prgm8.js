import React, { useState } from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

function Prgm8() {

    const [tasks, setTasks] = useState([])
    const [filter, setFilter] = useState('all')

    const addTask = (task) => {
        setTasks([...tasks, { ...task, completed: false }])
    }

    const toggleTaskCompletion = (index) => {
        setTasks((prevTasks) =>
            prevTasks.map((task, i) =>
                i === index ? { ...task, completed: !task.completed } : task)
        )
    }

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'completed') return task.completed
        if (filter === 'pending') return !task.completed
        return true
    })

    return (
        <div8>
            <h1>8. Remainder Application</h1>

            <TaskForm addTask={addTask} />

            <div81>
                <button onClick={() => setFilter('all')}>All Tasks</button>
                <button onClick={() => setFilter('completed')}>Completed</button>
                <button onClick={() => setFilter('pending')}>Pending</button>
            </div81>

            <TaskList tasks={filteredTasks} toggleTaskCompletion={toggleTaskCompletion} />

        </div8>
    )
}

export default Prgm8