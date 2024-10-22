import {createContext, useEffect, useReducer} from "react";

export const TodosContext = createContext(null);
export const TodosDispatchContext = createContext(null);

export function TodosProvider({children}) {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, dispatch] = useReducer(todosReducer, initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

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

      return [
        ...state,
        action.payload
      ]
    }

    case "deleteTodo":{

      return state.filter((todo) => todo.id !== action.payload)
    }

    case "editTodo":{
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
      );
    }

  }
}