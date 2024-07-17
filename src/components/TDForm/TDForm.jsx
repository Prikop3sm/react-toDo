import AddButton from "../AddButton/AddButton.jsx";
import InputForm from "../InputForm/InputForm.jsx";


export default function TDForm(){
  return (

    //test
    <div className={'container'}>
      <h1 className={"todo__header"}>My ToDos</h1>
      <form className={"todo__form"} onSubmit={ async (e) => {
        e.preventDefault();
        const title = e.target.Title.value;
        const description = e.target.Description.value;
        const data = {
          title: title,
          description: description
        };
        const ans = await fetch("http://localhost:3001/todos", {
          method: "POST",
          body: JSON.stringify(data)
        })
        const fetchData = await ans.json()

        console.log(fetchData)
      }}>
        <InputForm title={"Title"} placeholder={"type here title"}/>
        <InputForm title={"Description"} placeholder={"type here description"}/>
        <AddButton/>
      </form>
    </div>
  )
}
