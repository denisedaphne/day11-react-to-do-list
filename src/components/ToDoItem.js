import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from './ToDoReducer';
import { Typography, Button } from 'antd';
import { DeleteFilled } from '@ant-design/icons';
import '../App.css';

const ToDoItem = (props) => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTodo(props.id));
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this todo?')) {
            dispatch(deleteTodo(props.id));
        }
    };
    
    return (
        <div className='toDoList'>
            <Typography.Text 
                style={{ textDecoration: props.done ? 'line-through' : 'none'}}
                onClick={handleToggle}
                >
                    {props.text}  
            </Typography.Text> &nbsp;
            <Button type="primary" danger icon={<DeleteFilled />} onClick={handleDelete}/>
        </div>
    );
}

export default ToDoItem;