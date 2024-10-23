import {useContext} from "react";
import {TodosDispatchContext} from "../../context/todosContext.jsx";

export default function SortButtons(){
  const dispatch = useContext(TodosDispatchContext)

  function onAZSort(){
    dispatch({
      type: "sort a-z"
    })
  }
  function onZASort(){
    dispatch({
      type: "sort z-a"
    })
  }

  return (
    <>
      <div className={"container"}>
        <div className={"buttons"}>
          <button className={"buttons-item"} onClick={onAZSort}>sort A-Z</button>
          <button className={"buttons-item"} onClick={onZASort}>sort Z-A</button>
        </div>
      </div>
    </>
  )
}
