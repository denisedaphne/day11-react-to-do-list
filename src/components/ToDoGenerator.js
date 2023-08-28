import { useState } from "react";
import { Button, Input, Space } from 'antd';

const ToDoGenerator = (props) => {
    const [inputValue, setInputValue] = useState("");
    
    const addTodoItem = () => {
        props.onInputChange(inputValue);
        setInputValue("");
    }

    return (
        <div>
            <Space.Compact>
                <Input value={inputValue} onChange={event => setInputValue(event.target.value)} />
                <Button onClick={addTodoItem} type="primary">Add</Button>
            </Space.Compact>
        </div>
    );
}

export default ToDoGenerator;