import {createContext, useReducer} from "react";

export const TodosContext = createContext(null);
export const TodosDispatchContext = createContext(null);

export function TodosProvider({children}) {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, dispatch] = useReducer(todosReducer, initialState);
  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  )
}
function todosReducer(state, action) {
  switch (action.type) {
    case "addTodo":{

      const res = [
        ...state,
        action.payload
      ]
      localStorage.setItem("todos", JSON.stringify(res));

      return res
    }
  }
}