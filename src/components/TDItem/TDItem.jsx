import { EditButton } from "../EditButton"
import { DeleteButton } from "../DeleteButton"
import { useChangeTodos } from "../../hooks"
import { Checkbox } from "../Checkbox"
import { useCompleteTodos } from "../../hooks/useCompleteTodos.jsx"

export function TDItem({ todo }) {
    const { isEditing, onChangeTodos, onStartEditing, onCancelEditing } =
        useChangeTodos(todo)
    const { toggleCompleteTodo, isComplete } = useCompleteTodos(todo)
    const creatingDate = `${new Date(todo.date)
        .toISOString()
        .slice(0, 10)
        .split("-")
        .reverse()
        .join(".")} ${new Date(todo.date).toISOString().slice(11, 19)}`

    if (!isEditing) {
        return (
            <li className={"main-list__item"}>
                <Checkbox
                    toggleCompleteTodo={toggleCompleteTodo}
                    isComplete={isComplete}
                />
                <h2 className={"main-list__title"}>{todo.title}</h2>
                <h3 className={"main-list__description"}>{todo.description}</h3>
                <h5 className={"main-list__date"}>{creatingDate}</h5>
                <EditButton onStartEditing={onStartEditing} />
                <DeleteButton id={todo.id} />
            </li>
        )
    }

    return (
        <form className={"main-list__form"} onSubmit={onChangeTodos}>
            <input
                placeholder={"edit title"}
                defaultValue={todo.title}
                name={"title"}
                id={"title"}
            />
            <input
                placeholder={"edit description"}
                defaultValue={todo.description}
                name={"description"}
                id={"description"}
            />
            <input type={"submit"} value={"done"} />
            <input type={"button"} value={"cancel"} onClick={onCancelEditing} />
        </form>
    )
}
