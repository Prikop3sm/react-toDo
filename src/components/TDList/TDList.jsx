import { useContext } from "react"
import { TodosContext } from "../../context/todosContext/context.jsx"
import { TDItem } from "../TDItem"
import { useSortTodos } from "../../hooks"
import { UserSettingsContext } from "../../context/userSettingsContext/context.jsx"

export function TDList() {
  const todos = useContext(TodosContext)
  const { sort } = useContext(UserSettingsContext)

  const { onSortTodos } = useSortTodos()
  const sortedTodos = onSortTodos(todos, sort)

  return (
    <>
      {!!sortedTodos &&
        sortedTodos.map((item) => <TDItem key={item.id} todo={item} />)}
    </>
  )
}
