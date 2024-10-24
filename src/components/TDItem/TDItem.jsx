import EditButton from "../EditButton/EditButton.jsx";
import DeleteButton from "../DeleteButton/DeleteButton.jsx";
import {useChangeTodos} from "../../hooks/useChangeTodos.jsx";

export function TDItem({ todo }) {
  const { isEditing, onChangeTodos, onStartEditing } = useChangeTodos(todo)

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
    <form className={"main-list__form"} onSubmit={onChangeTodos}>
      <input placeholder={"edit title"} defaultValue={todo.title} name={"title"} id={'title'}/>
      <input placeholder={"edit description"} defaultValue={todo.description} name={"description"} id={'description'}/>
      <input type={"submit"} value={'asd'}/>
    </form>
  )
}