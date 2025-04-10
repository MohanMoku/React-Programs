import React from 'react'

function TaskList(props) {

    if (props.tasks.length === 0) {
        return <h1 style={{
            color: 'white',
            fontWeight: 'bold',
            padding: '20px 0 0 0'
        }}>No tasks</h1>
    }

    return (
        <ul>
            {props.tasks.map((task, index) => (
                <li key={index} style={{
                    backgroundColor: task.completed ? '#9df79d' : '#f8bab5'
                }}>
                    <h3>{task.name}</h3>
                    <p><strong>Due Date:</strong> {task.dueDate}</p>
                    {task.description && <p> {task.description}</p>}

                    <button onClick={() => props.toggleTaskCompletion(index)} style={{
                        backgroundColor: task.completed ? '#f8bab5' : '#9df79d'
                    }}>
                        {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
                    </button>

                </li>
            ))}
        </ul>
    )
}

export default TaskList