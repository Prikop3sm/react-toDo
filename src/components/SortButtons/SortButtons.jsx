import { useSortTodos } from "../../hooks"
import { useFilterTodos } from "../../hooks/useFilterTodos.jsx"

export function SortButtons() {
    const { onAZSort, onZASort } = useSortTodos()
    const { onFilterCompleteOnly, onFilterNonCompleteOnly, onFilterAll } =
        useFilterTodos()

    return (
        <>
            <div className={"container"}>
                <div className={"buttons"}>
                    <button className={"buttons-item"} onClick={onAZSort}>
                        sort A-Z
                    </button>
                    <button className={"buttons-item"} onClick={onZASort}>
                        sort Z-A
                    </button>
                    <button
                        className={"buttons-item"}
                        onClick={onFilterCompleteOnly}
                    >
                        completed only
                    </button>
                    <button
                        className={"buttons-item"}
                        onClick={onFilterNonCompleteOnly}
                    >
                        non-completed only
                    </button>
                    <button className={"buttons-item"} onClick={onFilterAll}>
                        all
                    </button>
                </div>
            </div>
        </>
    )
}
