import {v4 as uuidv4} from "uuid";
import {useContext, useState} from "react";
import {TodosDispatchContext} from "../context/todosContext.jsx";

export const useAddTodo = () => {
  const dispatch = useContext(TodosDispatchContext);
  // const [isEditing, setIsEditing] = useState(false);

  function onAddTodos(e) {
    e.preventDefault();
    const title = e.target.Title.value;
    const description = e.target.Description.value;
    const isEditing = false;

    const data = {
      title,
      description,
      isEditing,
      id: uuidv4()
    };

    if (title) {
      dispatch({
        type: "addTodo",
        payload: data
      });

      e.target.Title.value = '';
      e.target.Description.value = '';
    }
  }

  return { onAddTodos };
}