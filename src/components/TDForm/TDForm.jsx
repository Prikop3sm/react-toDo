import AddButton from "../AddButton/AddButton.jsx";
import InputForm from "../InputForm/InputForm.jsx";


export default function TDForm(){
  return (

    //test
    <div className={'container'}>
      <h1 className={"todo__header"}>My ToDos</h1>
      <form className={"todo__form"} onSubmit={(e) => {
        e.preventDefault();
        console.log("sended")
      }}>
        <InputForm title={"Title"} placeholder={"type here title of todo"}/>
        <InputForm title={"Description"} placeholder={"type here description of todo"}/>
        <AddButton/>
      </form>
    </div>
  )
}
