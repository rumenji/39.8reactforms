import React, { useState } from "react";

function Box({style, remove, testId}){
    
    return (
        <>
        <div style={style} data-testid={testId}></div>
        <button onClick={remove}>X</button>
        </>
    )
}

export default Box;