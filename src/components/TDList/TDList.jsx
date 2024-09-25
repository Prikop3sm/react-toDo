import { useContext} from "react";
import {TodosContext} from "../../context/todosContext.jsx";
import DeleteButton from "../DeleteButton/DeleteButton.jsx";
import EditButton from "../EditButton/EditButton.jsx";


export default function TDList(){
  const todos = useContext(TodosContext)

  return (
    <>
      <div className={'container'}>
        <div className={"main"}>
          <ul className={"main-list"}>
            {todos ? todos.map(item => <li className={"main-list__item"} key={item.id}>
              <h2 className={"main-list__title"}>{item.title}</h2>
              <h3 className={"main-list__description"}>{item.description}</h3>
              <EditButton id={item}/>
              <DeleteButton id={item.id}/>
            </li> ) : null}
          </ul>
        </div>
      </div>
    </>
  )
}