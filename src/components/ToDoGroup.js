import { List, Typography } from 'antd';
const ToDoGroup= (props) => {
    return (
        <div>
            <List
                bordered
                dataSource={props.todoListItems}
                renderItem={(item) => (
                <List.Item>
                <Typography.Text mark></Typography.Text> {item}
                </List.Item>
                )}
            />          
        </div>

    );
}

export default ToDoGroup;