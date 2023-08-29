import { useState } from "react";
import { Button, Input, Space } from 'antd';
import { useDispatch } from "react-redux";
import { addTodo } from '../components/ToDoReducer';
import { v4 as uuidv4} from 'uuid';


const ToDoGenerator = (props) => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");
    
    const addTodoItem = () => {
        dispatch(addTodo({text: inputValue, id: uuidv4(), done: false}));
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