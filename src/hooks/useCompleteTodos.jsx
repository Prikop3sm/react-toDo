import { useContext } from "react"
import { completeTodoAction } from "../context/todosContext/actions.js"
import { TodosDispatchContext } from "../context/todosContext/context.jsx"

export const useCompleteTodos = (todo) => {
    const dispatch = useContext(TodosDispatchContext)
    let isComplete = todo.isComplete

    function toggleCompleteTodo() {
        const data = {
            ...todo,
            isComplete: !isComplete,
        }
        dispatch(completeTodoAction(data))
    }

    return {
        toggleCompleteTodo,
        isComplete,
    }
}
