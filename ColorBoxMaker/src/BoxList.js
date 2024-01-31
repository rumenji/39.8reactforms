import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

function BoxList(){
    const [boxes, setBoxes] = useState([]);

    const addBox = box => {
        const newBox = {...box, id: uuid()};
        setBoxes(boxes => [...boxes, newBox])
    }

    const removeBox = idx => {
        const boxesCopy = [...boxes];
        setBoxes(boxes => boxesCopy.filter(box => box.id !== idx))
    }

    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
            {boxes.map((box) => (<Box style={box.style} remove={() => removeBox(box.id)} testId={box.id}/>))}
        </div>
    )
}

export default BoxList;