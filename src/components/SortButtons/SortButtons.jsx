import { useSortTodos } from "../../hooks"

export function SortButtons() {
  const { onAZSort, onZASort } = useSortTodos()

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
        </div>
      </div>
    </>
  )
}
