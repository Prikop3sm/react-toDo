import EditButton from "../EditButton/EditButton.jsx";
import DeleteButton from "../DeleteButton/DeleteButton.jsx";
import  {useContext} from "react";
import {TodosContext} from "../../context/todosContext.jsx";
import TDForm from "../TDForm/TDForm.jsx";

export default function TDItem() {
  const todos = useContext(TodosContext)

  return (
  <>
    {!!todos && todos.map(item => !item.isEditing ?
      <li className={"main-list__item"} key={item.id}>
      <h2 className={"main-list__title"}>{item.title}</h2>
      <h3 className={"main-list__description"}>{item.description}</h3>
      <EditButton id={item}/>
      <DeleteButton id={item.id}/>
        {/* eslint-disable-next-line react/jsx-key */}
    </li>  : <TDForm key={item.id}/> )}
  </>
  )
}