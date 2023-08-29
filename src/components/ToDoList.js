import React from 'react';
import { useSelector } from 'react-redux';
import ToDoGroup from './ToDoGroup';
import ToDoGenerator from './ToDoGenerator';

const TodoList = () => {
    const todosList = useSelector((state) => 
        state.todos
    )

  return (
    <>
      <ToDoGroup todoListItems={todosList} />
      <ToDoGenerator />
    </>
  );
};


export default TodoList;