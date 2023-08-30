import { shallowEqual, useSelector } from "react-redux";
import TodoItem from "./ToDoItem";
import "./css/TodoGroup.css";

const TodoGroup = () => {
    const todoList = useSelector((state) => state.todo.todoList.filter(todo => !todo.done), shallowEqual)
    return (
        <ul>
            {todoList.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoGroup;