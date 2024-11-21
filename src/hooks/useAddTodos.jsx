import { v4 as uuidv4 } from "uuid"
import { useContext } from "react"
import { TodosDispatchContext } from "../context/todosContext/context.jsx"
import { addTodoAction } from "../context/todosContext/actions.js"

export const useAddTodo = () => {
    const dispatch = useContext(TodosDispatchContext)

    function onAddTodos(e) {
        e.preventDefault()
        const title = e.target.Title.value
        const description = e.target.Description.value
        const isComplete = false

        const data = {
            title,
            description,
            isComplete,
            id: uuidv4(),
        }

        if (title) {
            dispatch(addTodoAction(data))

            e.target.Title.value = ""
            e.target.Description.value = ""
        }
    }

    return { onAddTodos }
}
