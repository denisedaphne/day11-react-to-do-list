import ToDoItem from "./ToDoItem";

const ToDoGroup= (props) => {
    return (
        <div>
            {props.todoListItems.map((item, index) => <ToDoItem key={index} input={item}/>)}
        </div>
    );
}

export default ToDoGroup;