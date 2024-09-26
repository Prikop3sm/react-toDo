import TDItem from "../TDItem/TDItem.jsx";
import {useContext} from "react";
import {TodosContext} from "../../context/todosContext.jsx";

export default function TDList(){
  const todos = useContext(TodosContext)

  return (

    <>
      <div className={'container'}>
        <div className={"main"}>
          <ul className={"main-list"}>
            <TDItem/>
          </ul>
        </div>
      </div>
    </>
  )
}