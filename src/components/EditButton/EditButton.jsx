import {useContext} from "react";
import {TodosContext, TodosDispatchContext} from "../../context/todosContext.jsx";

export default function EditButton({ id }) {
  const dispatch = useContext(TodosDispatchContext);
  const data = useContext(TodosContext)

  function onEditTodos(){
    data[0].isEditing = !data[0].isEditing
    console.log()
    dispatch({
      type: "editTodo",
      payload: id
    })

  }

  return (
    <div className={"main-list__edit"} onClick={onEditTodos}>
      <div className={"main-list__small"}></div>
      <div className={"main-list__big"}></div>
    </div>
  )
}