import { useSortTodos } from "../../hooks"

export function SortButtons() {
    const { onAZSort, onZASort, onNewestSort, onOldestSort } = useSortTodos()

    return (
        <div className={"buttons__sort"}>
            <button className={"buttons-item"} onClick={onAZSort}>
                Sort A-Z
            </button>
            <button className={"buttons-item"} onClick={onZASort}>
                Sort Z-A
            </button>
            <button className={"buttons-item"} onClick={onNewestSort}>
                Newest 1st
            </button>
            <button className={"buttons-item"} onClick={onOldestSort}>
                Oldest 1st
            </button>
        </div>
    )
}
