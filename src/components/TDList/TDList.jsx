import { useContext } from "react"
import { TodosContext } from "../../context/todosContext/context.jsx"
import { TDItem } from "../TDItem"
import { useSortTodos } from "../../hooks"
import { UserSettingsContext } from "../../context/userSettingsContext/context.jsx"
import { useFilterTodos } from "../../hooks/useFilterTodos.jsx"

export function TDList() {
    const todos = useContext(TodosContext)
    const { sort, filter } = useContext(UserSettingsContext)

    const { onSortTodos } = useSortTodos()
    const sortedTodos = onSortTodos(todos, sort)

    const { onFilterTodos } = useFilterTodos()
    const filteredTodos = onFilterTodos(sortedTodos, filter)

    return (
        <>
            {!!filteredTodos &&
                filteredTodos.map((item) => (
                    <TDItem key={item.id} todo={item} />
                ))}
        </>
    )
}
