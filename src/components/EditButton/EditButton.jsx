import {useContext} from "react";
import {TodosDispatchContext} from "../../context/todosContext.jsx";

export default function EditButton({ id }) {
  const dispatch = useContext(TodosDispatchContext);

  function onEditTodos(){
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