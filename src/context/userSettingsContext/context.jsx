import { createContext, useEffect, useReducer } from "react"
import { userDefaultSettings } from "../../constants/index.js"

export const UserSettingsContext = createContext(null)
export const UserSettingsDispatchContext = createContext(null)

export function UserSettingsProvider({ children }) {
  const localStorageState = JSON.parse(localStorage.getItem("userSettings"))
  const initialState = localStorageState ?? userDefaultSettings
  const [userSettings, dispatch] = useReducer(todosReducer, initialState)

  useEffect(() => {
    localStorage.setItem("userSettings", JSON.stringify(userSettings))
  }, [userSettings])

  return (
    <UserSettingsContext.Provider value={userSettings}>
      <UserSettingsDispatchContext.Provider value={dispatch}>
        {children}
      </UserSettingsDispatchContext.Provider>
    </UserSettingsContext.Provider>
  )
}

function todosReducer(state, action) {
  switch (action.type) {
    case "a-z": {
      return {
        ...state,
        sort: "a-z",
      }
    }

    case "z-a": {
      return {
        ...state,
        sort: "z-a",
      }
    }
    default: {
      return state
    }
  }
}
