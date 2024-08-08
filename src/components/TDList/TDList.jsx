import { useContext} from "react";
import {TodosContext} from "../../context/todosContext.jsx";

export default function TDList(){
  const data = useContext(TodosContext)

  return (
    <>
      <div className={'container'}>
        <div className={"main"}>
          <ul className={"main-list"}>
            {data ? data.map(person => <li className={"main-list__item"} key={person.description}>
              <h2 className={"main-list__title"}>{person.title}</h2>
              <h3 className={"main-list__description"}>{person.description}</h3>
            </li>) : null}
          </ul>
        </div>
      </div>
    </>
  )
}