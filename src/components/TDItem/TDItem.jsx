import EditButton from "../EditButton/EditButton.jsx";
import DeleteButton from "../DeleteButton/DeleteButton.jsx";
import {useState} from "react";
import InputForm from "../InputForm/InputForm.jsx";
import StopEditButton from "../StopEditButton/StopEditButton.jsx";

export function TDItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);

  function onStartEditing(){
    setIsEditing(true);
    console.log(todo.title, todo.description);
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
    <form className={"main-list__form"}>
      <InputForm placeholder={"edit title"}/>
      <InputForm placeholder={"edit description"}/>
      <StopEditButton/>
    </form>
  )
}