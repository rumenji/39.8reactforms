import React, { useState } from "react";

function EditTodoForm({id, editTodo, task}){
    const INITIAL_STATE = {task: task};
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = evt => {
        evt.preventDefault();
        editTodo(id, formData);
        setFormData(INITIAL_STATE);
    };

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData, [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Edit to-do:</label>
            <input 
            type="text" 
            id="task" 
            name="task" 
            placeholder="Enter to-do task" 
            value={formData.task} 
            onChange={handleChange}></input>

            <button>Edit to-do</button>
        </form>
    )
}

export default EditTodoForm;