import {useState} from "react";

export const useChangeTodos = () => {
  const [isEditing, setIsEditing] = useState(false);

  function onChangeTodos(e) {
    e.preventDefault()
    setIsEditing(false)
  }

  function onStartEditing(){
    setIsEditing(true);
  }

  return { isEditing, onChangeTodos, onStartEditing }
}