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
        case "newest": {
            return {
                ...state,
                sort: "newest",
            }
        }
        case "oldest": {
            return {
                ...state,
                sort: "oldest",
            }
        }

        case "completeOnly": {
            return {
                ...state,
                filter: "completeOnly",
            }
        }

        case "nonCompleteOnly": {
            return {
                ...state,
                filter: "nonCompleteOnly",
            }
        }

        case "all": {
            return {
                ...state,
                filter: "all",
            }
        }

        default: {
            return state
        }
    }
}
