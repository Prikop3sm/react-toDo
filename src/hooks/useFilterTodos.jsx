import { useContext } from "react"
import { UserSettingsDispatchContext } from "../context/userSettingsContext/context.jsx"
import {
    userSettingsFilterCompleteOnlyAction,
    userSettingsFilterNonCompleteOnlyAction,
    userSettingsFilterAllAction,
} from "../context/userSettingsContext/actions.js"
import { all, completeOnly, nonCompleteOnly } from "../constants/index.js"

export const useFilterTodos = () => {
    const dispatch = useContext(UserSettingsDispatchContext)

    function onFilterCompleteOnly() {
        dispatch(userSettingsFilterCompleteOnlyAction)
    }
    function onFilterNonCompleteOnly() {
        dispatch(userSettingsFilterNonCompleteOnlyAction)
    }
    function onFilterAll() {
        dispatch(userSettingsFilterAllAction)
    }

    function onFilterTodos(todos, filter) {
        switch (filter) {
            case completeOnly: {
                return todos.map((todo) => todo.isComplete === true && todo)
            }
            case nonCompleteOnly: {
                return todos.map((todo) => todo.isComplete === false && todo)
            }
            case all: {
                return todos.map((todo) => todo)
            }
            default: {
                return todos.map((todo) => todo)
            }
        }
    }

    return {
        onFilterCompleteOnly,
        onFilterNonCompleteOnly,
        onFilterAll,
        onFilterTodos,
    }
}
