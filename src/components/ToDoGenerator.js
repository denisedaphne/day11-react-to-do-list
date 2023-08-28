import { useState } from "react";

const ToDoGenerator = (props) => {
    const [inputValue, setInputValue] = useState("");
    
    const addTodoItem = () => {
        props.onInputChange(inputValue);
    }

    return (
        <div>
            <input onChange={event => setInputValue(event.target.value)}/>
            <button onClick={addTodoItem}>add</button>
        </div>
    );
}

export default ToDoGenerator;