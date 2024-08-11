import { useContext} from "react";
import {TodosContext} from "../../context/todosContext.jsx";
import DeleteButton from "../DeleteButton/DeleteButton.jsx";


export default function TDList(){
  const data = useContext(TodosContext)

  return (
    <>
      <div className={'container'}>
        <div className={"main"}>
          <ul className={"main-list"}>
            {data ? data.map(item => <li className={"main-list__item"} key={item.id}>
              <h2 className={"main-list__title"}>{item.title}</h2>
              <DeleteButton/>
              <h3 className={"main-list__description"}>{item.description}</h3>
            </li> ) : null}
          </ul>
        </div>
      </div>
    </>
  )
}