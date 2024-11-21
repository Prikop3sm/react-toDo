import { useContext } from "react"
import { completeTodoAction } from "../context/todosContext/actions.js"
import { TodosDispatchContext } from "../context/todosContext/context.jsx"

export const useCompleteTodos = (todo) => {
    const dispatch = useContext(TodosDispatchContext)
    let isComplete = todo.isComplete

    function toggleCompleteTodo() {
        const title = todo.title
        const description = todo.description
        const id = todo.id
        isComplete = !isComplete

        const data = {
            title,
            description,
            isComplete,
            id,
        }
        dispatch(completeTodoAction(data))
    }

    return {
        toggleCompleteTodo,
        isComplete,
    }
}
