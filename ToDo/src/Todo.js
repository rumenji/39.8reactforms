import React, { useState } from "react";
import "./Todo.css";

function Todo({task, remove, edit, testId, completed, complete}){

    return (
        <>
        <div onClick={complete} className={completed === true ? "completed" : "not-completed"} data-testid={testId}>{task}</div>
        <button onClick={edit}>Edit</button>
        <button onClick={remove}>X</button>
        </>
    )
}

export default Todo;