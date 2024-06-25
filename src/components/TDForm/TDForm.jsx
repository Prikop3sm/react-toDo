import AddButton from "../AddButton/AddButton.jsx";
import InputForm from "../InputForm/InputForm.jsx";


export default function TDForm(){
  return (
    //test
    <div className={'container'}>
      <form className={"todo__form"} onSubmit={(e)=>{
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
