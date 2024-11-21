import {
    addTodo,
    completeTodo,
    deleteTodo,
    editTodo,
} from "../../constants/index.js"

export const addTodoAction = (payload) => ({
    type: addTodo,
    payload,
})

export const editTodoAction = (payload) => ({
    type: editTodo,
    payload,
})

export const deleteTodoAction = (payload) => ({
    type: deleteTodo,
    payload,
})

export const completeTodoAction = (payload) => ({
    type: completeTodo,
    payload,
})
