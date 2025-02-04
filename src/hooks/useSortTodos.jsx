import { useContext } from "react"
import { UserSettingsDispatchContext } from "../context/userSettingsContext/context.jsx"
import { sortAZ, sortZA, sortNewest, sortOldest } from "../constants/index.js"
import {
    userSettingsSortAZAction,
    userSettingsSortNewestAction,
    userSettingsSortOldestAction,
    userSettingsSortZAAction,
} from "../context/userSettingsContext/actions.js"

export const useSortTodos = () => {
    const dispatch = useContext(UserSettingsDispatchContext)

    function onAZSort() {
        dispatch(userSettingsSortAZAction)
    }
    function onZASort() {
        dispatch(userSettingsSortZAAction)
    }
    function onNewestSort() {
        dispatch(userSettingsSortNewestAction)
    }
    function onOldestSort() {
        dispatch(userSettingsSortOldestAction)
    }

    function onSortTodos(todos, sort) {
        switch (sort) {
            case sortAZ: {
                return todos
                    .map((todo) => todo)
                    .sort((a, b) =>
                        a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
                    )
            }

            case sortZA: {
                return todos
                    .map((todo) => todo)
                    .sort((a, b) =>
                        a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1
                    )
            }

            case sortNewest: {
                return todos
                    .map((todo) => todo)
                    .sort((a, b) => (a.date < b.date ? 1 : -1))
            }
            case sortOldest: {
                return todos
                    .map((todo) => todo)
                    .sort((a, b) => (a.date < b.date ? -1 : 1))
            }

            default: {
                return todos.map((todo) => todo)
            }
        }
    }

    return { onSortTodos, onAZSort, onZASort, onNewestSort, onOldestSort }
}
