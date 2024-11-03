import { useContext } from "react"
import { TodosDispatchContext } from "../../context/todosContext/context.jsx"
import { deleteTodoAction } from "../../context/todosContext/actions.js"

export function DeleteButton({ id }) {
  const dispatch = useContext(TodosDispatchContext)

  function onDeleteTodo() {
    dispatch(deleteTodoAction(id))
  }

  return (
    <div className={"main-list__button"} onClick={onDeleteTodo}>
      <div className={"main-list__left"}></div>
      <div className={"main-list__right"}></div>
    </div>
  )
}
