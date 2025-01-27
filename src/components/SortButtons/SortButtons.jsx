import { useSortTodos } from "../../hooks"

export function SortButtons() {
    const { onAZSort, onZASort } = useSortTodos()

    return (
        <div className={"buttons__sort"}>
            <button className={"buttons-item"} onClick={onAZSort}>
                sort A-Z
            </button>
            <button className={"buttons-item"} onClick={onZASort}>
                sort Z-A
            </button>
        </div>
    )
}
