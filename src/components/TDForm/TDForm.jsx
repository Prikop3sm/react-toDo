import AddButton from "../AddButton/AddButton.jsx";
import InputForm from "../InputForm/InputForm.jsx";
import { v4 as uuidv4 } from 'uuid';
import { useAddTodo } from "../../hooks/useAddTodos.jsx";
uuidv4();


export default function TDForm(){
  const { onAddTodos } = useAddTodo();
  // const dispatch = useContext(TodosDispatchContext)
  // function onAddTodos(e){
  //   e.preventDefault();
  //   const title = e.target.Title.value;
  //   const description = e.target.Description.value;
  //   const isEditing = false;
  //
  //   const data = {
  //     title: title,
  //     description: description,
  //     isEditing: isEditing,
  //     id: uuidv4()
  //   }
  //
  //   if (title){
  //
  //     dispatch({
  //       type: "addTodo",
  //       payload: data
  //     })
  //
  //     e.target.Title.value = '';
  //     e.target.Description.value = '';
  //   }
  //
  // }
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
