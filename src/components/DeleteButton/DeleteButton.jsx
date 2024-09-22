import {useContext} from "react";
import {TodosDispatchContext} from "../../context/todosContext.jsx";

export default function DeleteButton({ id }) {
    const dispatch = useContext(TodosDispatchContext);

    function onDeleteTodo(){
      dispatch({
        type: "deleteTodo",
        payload: id
      })

  }

  return (
    <div className={"main-list__button"} onClick={onDeleteTodo}>
      <div className={"main-list__left"}></div>
      <div className={"main-list__right"}></div>
    </div>
  )
}