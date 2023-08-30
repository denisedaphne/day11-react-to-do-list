import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const TodoItemDetail = () => {
    const { id } = useParams();
    const todoItem = useSelector((state) =>
        state.todo.todoList.find((todoItem) => todoItem.id === id)
    );
   
    return (
        <div className="todo-detail">
            <h1>Todo Item Detail</h1>
            <div>Id: {todoItem.id}</div>
            <div>Name: {todoItem.text}</div>
        </div>
    );
}