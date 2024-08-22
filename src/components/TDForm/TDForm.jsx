import AddButton from "../AddButton/AddButton.jsx";
import InputForm from "../InputForm/InputForm.jsx";
import {useContext} from "react";
import {TodosDispatchContext} from "../../context/todosContext.jsx";
import { v4 as uuidv4 } from 'uuid';
uuidv4();


export default function TDForm(){
  const dispatch = useContext(TodosDispatchContext)
  function onAddTodos(e){
    e.preventDefault();
    const title = e.target.Title.value;
    const description = e.target.Description.value;

    const data = {
      title: title,
      description: description,
      id: uuidv4()
    }

    dispatch({
      type: "addTodo",
      payload: data
    })

    e.target.Title.value = '';
    e.target.Description.value = '';
  }
  return (

    //test
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
