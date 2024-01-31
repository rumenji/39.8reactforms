import React, { useState } from "react";

function NewTodoForm({addTodo}){
    const INITIAL_STATE = {task: ""};
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = evt => {
        evt.preventDefault();
        addTodo(formData);
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
            <label htmlFor="task">Enter to-do:</label>
            <input 
            type="text" 
            id="task" 
            name="task" 
            placeholder="Enter to-do task" 
            value={formData.task} 
            onChange={handleChange}></input>

            <button>Add to-do</button>
        </form>
    )
}

export default NewTodoForm;