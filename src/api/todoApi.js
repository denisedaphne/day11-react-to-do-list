import { api } from "./api"

export const getTodoTasks = () => {
    return api.get('/todos');
}

export const updateTodoTask = (id, todoList) => {
    return api.put(`/todos/${id}`, todoList);
}

export const deleteTodoTask = (id) => {
    return api.delete(`/todos/${id}`);
}

export const addTodoTask = (todoList) => {
    return api.post('/todos', todoList);
}