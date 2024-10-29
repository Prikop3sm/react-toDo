import {useContext, useState} from "react";
import {TodosDispatchContext} from "../context/todosContext.jsx";

export const useChangeTodos = (todo) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TodosDispatchContext);

  function onChangeTodos(e) {
    e.preventDefault()
    const title = e.target.title.value;
    const description = e.target.description.value;
    const id = todo.id;

    if (title){

    const data = {
      title,
      description,
      id
    }

    dispatch({
      type: "editTodo",
      payload: data, id
    })

    setIsEditing(false)
    }
  }

  function onStartEditing(){
    setIsEditing(true);
  }

  function onCancelEditing(){
    setIsEditing(false)
  }

  return { isEditing, onChangeTodos, onStartEditing, onCancelEditing }
}