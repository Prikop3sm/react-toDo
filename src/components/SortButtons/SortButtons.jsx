import { useSortTodos } from "../../hooks"

export function SortButtons() {
    const { onAZSort, onZASort, onNewestSort, onOldestSort } = useSortTodos()

    return (
        <div className={"buttons__sort"}>
            <button className={"buttons-item"} onClick={onAZSort}>
                sort A-Z
            </button>
            <button className={"buttons-item"} onClick={onZASort}>
                sort Z-A
            </button>
            <button className={"buttons-item"} onClick={onNewestSort}>
                newest 1st
            </button>
            <button className={"buttons-item"} onClick={onOldestSort}>
                oldest 1st
            </button>
        </div>
    )
}
