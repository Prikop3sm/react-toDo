import AddButton from "../AddButton/AddButton.jsx";
import InputForm from "../InputForm/InputForm.jsx";


export default function TDForm(){
  return (
    <div className={'header'}>
      <InputForm title={"Title"}/>
      <InputForm title={"Description"}/>
      <AddButton/>
    </div>
  )
}