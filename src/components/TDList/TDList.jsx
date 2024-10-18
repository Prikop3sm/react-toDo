import  {useContext} from "react";
import {TodosContext} from "../../context/todosContext.jsx";
import {TDItem} from "../TDItem";
export default function TDList() {
  const todos = useContext(TodosContext)

  return (
  <>
    {!!todos && todos.map(item => <TDItem key={item.id} todo={item} />)}
  </>
  )
}