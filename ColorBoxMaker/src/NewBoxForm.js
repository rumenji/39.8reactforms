import React, { useState } from "react";

function NewBoxForm({addBox}){
    const INITIAL_STATE = {backgroundColor: "", height: "", width: ""};
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = evt => {
        evt.preventDefault();
        addBox(formData);
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
            <label htmlFor="color">Pick a color:</label>
            <input 
            type="text" 
            id="color" 
            name="backgroundColor" 
            placeholder="color" 
            value={formData.backgroundColor} 
            onChange={handleChange}></input>

            <label htmlFor="heigth">Heigth in px:</label>
            <input 
            type="text" 
            id="heigth" 
            name="height" 
            placeholder="height" 
            value={formData.height} 
            onChange={handleChange}></input>

            <label htmlFor="width">Width in px:</label>
            <input 
            type="text" 
            id="width" 
            name="width" 
            placeholder="width" 
            value={formData.width} 
            onChange={handleChange}></input>

            <button>Add box</button>
        </form>
    )
}

export default NewBoxForm;