import { useState } from "react";
import TodoGenerator from "./ToDoGenerator";
import TodoGroup from "./ToDoGroup";

const TodoList = () => {
    const [toDoListItems, setTodoListItems] = useState([]);

    return (
        <>
        <TodoGroup todoListItems={toDoListItems}/>
        <TodoGenerator onInputChange={(input)=>  setTodoListItems(toDoListItems.concat(input))}/>
        </>
    );
}

export default TodoList;