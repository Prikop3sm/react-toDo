import EditButton from "../EditButton/EditButton.jsx";
import DeleteButton from "../DeleteButton/DeleteButton.jsx";
import TDForm from "../TDForm/TDForm.jsx";
import {useState} from "react";

export function TDItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);

  function onStartEditing(){
    setIsEditing(true);
  }

  if (!isEditing) {
    return (
        <li className={"main-list__item"}>
          <h2 className={"main-list__title"}>{todo.title}</h2>
          <h3 className={"main-list__description"}>{todo.description}</h3>
          <EditButton onStartEditing={onStartEditing}/>
          <DeleteButton id={todo.id}/>
        </li>
    )
  }

  return (
    <TDForm/>
  )
}