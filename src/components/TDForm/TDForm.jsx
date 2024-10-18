import AddButton from "../AddButton/AddButton.jsx";
import InputForm from "../InputForm/InputForm.jsx";
import { useAddTodo } from "../../hooks/useAddTodos.jsx";


export default function TDForm(){
  const { onAddTodos } = useAddTodo();

  return (

    <div className={'container'}>
      <h1 className={"todo__header"}>My ToDos</h1>
      <form className={"todo__form"} onSubmit={onAddTodos}>
        <InputForm title={"Title"} placeholder={"type here title"}/>
        <InputForm title={"Description"} placeholder={"type here description"}/>
        <AddButton/>
      </form>
    </div>
  )
}
