import { List, Typography } from 'antd';

const ToDoGroup= (props) => {
    return (
        <div>
            <List
                bordered
                dataSource={props.todoListItems}
                renderItem={(item) => (
                <List.Item>
                <Typography.Text mark>{item.done ? 'done' : 'not done'}</Typography.Text> {item.text}
                </List.Item>
                )}
            />          
        </div>

    );
}

export default ToDoGroup;