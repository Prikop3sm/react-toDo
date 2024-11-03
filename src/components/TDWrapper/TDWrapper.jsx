import { TDList } from "../TDList"

export function TDWrapper() {
  return (
    <>
      <div className={"container"}>
        <div className={"main"}>
          <ul className={"main-list"}>
            <TDList />
          </ul>
        </div>
      </div>
    </>
  )
}
