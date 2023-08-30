import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Card, Col, Input, Modal, Row, Popconfirm, Button } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as todoApi from "../api/todoApi";
import "./css/TodoItem.css";
import { resetTodoList } from "./ToDoReducer";

const TodoItem = (props) => {
    const dispatch = useDispatch();
    const [updateValue, setUpdateValue] = useState("");
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);

    const onTriggerToggle = async () => {
        await todoApi.updateTodoTask(props.todo.id, { done: !props.todo.done });
        const response = await todoApi.getTodoTasks();
        dispatch(resetTodoList(response.data));
    };

    const handleUpdateConfirm = async () => {
        await todoApi.updateTodoTask(props.todo.id, { text: updateValue });
        const response = await todoApi.getTodoTasks();
        dispatch(resetTodoList(response.data));
        setIsUpdateModalVisible(false);
        setUpdateValue("");
    }

    const handleDeleteConfirm = async () => {
        await todoApi.deleteTodoTask(props.todo.id);
        const response = await todoApi.getTodoTasks();
        dispatch(resetTodoList(response.data));
        setIsDeleteModalVisible(false);
    };

    const showUpdateModal = () => {
        setIsUpdateModalVisible(true);
    };

    const handleUpdateCancel = () => {
        setUpdateValue("");
        setIsUpdateModalVisible(false);
    };

    const handleDeleteCancel = () => {
        setIsDeleteModalVisible(false);
    };

    const currentDate = new Date().toISOString().split("T")[0];

    return (
        <Card bordered = {true} style={{width: 700, display:"flex", justifyContent: "center", margin:"auto"}}>
            {props.todo.done && "done"}
            <Row justify="center" align="middle" gutter={[16, 8]}>
                <Col span={20} onClick={onTriggerToggle}><p>{currentDate}: {props.todo.text}</p></Col>
                <Col>
                    <Button type="primary" onClick={showUpdateModal}><EditFilled /></Button>
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={handleDeleteConfirm}
                        onCancel={handleDeleteCancel}
                        okText="Yes"
                        cancelText="No"
                    >
                    <Button type="primary" danger><DeleteFilled /></Button>
                    </Popconfirm>
                </Col>
            </Row>
            
            <Modal
                title="Update Todo"
                open={isUpdateModalVisible}
                onOk={handleUpdateConfirm}
                onCancel={handleUpdateCancel}
            >
                <p>What do you want to update?</p>
                <Input
                    value={updateValue}
                    onChange={(input) => setUpdateValue(input.target.value)}
                    placeholder="Please input here"
                />
            </Modal>
        </Card>
    );
};

export default TodoItem;