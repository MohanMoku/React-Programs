import React, { useState } from 'react'

function TaskForm(props) {

    const [task, setTask] = useState({
        name: '',
        dueDate: '',
        description: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setTask({ ...task, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!task.name.trim() || !task.dueDate.trim()) {
            alert('Task Name and Due Date are required')
            return
        }
        props.addTask(task)
        setTask({
            name: '',
            dueDate: '',
            description: ''
        })

    }

    return (
        <form onSubmit={handleSubmit}>

            <table>
                <tr>
                    <th>Task Name:</th>
                    <th>
                        <input type="text" name='name' value={task.name} onChange={handleChange} placeholder='Task Name' />
                    </th>
                </tr>
                <tr>
                    <th>Due Date:</th>
                    <th>
                        <input type="date" name='dueDate' value={task.dueDate} onChange={handleChange} />
                    </th>
                </tr>
                <tr>
                    <th>Description: <br/>(Optional)
                    </th>
                    <th>
                        <textarea name='description' value={task.description} onChange={handleChange} placeholder='Task Description' rows={2} cols={25} />
                    </th>
                </tr>
            </table>

            <button type='submit'>Add Task</button>

        </form>
    )
}

export default TaskForm