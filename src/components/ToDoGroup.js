import { List } from 'antd';
import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoGroup= (props) => {
    return (
        <div>
            <List
                bordered
                dataSource={props.todoListItems}
                renderItem={(item) => (
                <List.Item>
                    <ToDoItem id={item.id} text={item.text} done={item.done} />
                </List.Item>
                )}
            />          
        </div>

    );
}

export default ToDoGroup;