import {useContext, useEffect} from "react";
import {TodosContext, TodosDispatchContext} from "../../context/todosContext.jsx";
import {TDItem} from "../TDItem";



export default function TDList() {
  const todos = useContext(TodosContext);
  const dispatch = useContext(TodosDispatchContext);

  useEffect(() => {
    dispatch({
      type: `${localStorage.getItem("sort")}`
    })
  }, [todos, dispatch]);

  return (
  <>
    {!!todos && todos.map(item => <TDItem key={item.id} todo={item} />)}
  </>
  )
}