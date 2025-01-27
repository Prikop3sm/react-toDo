import { SortButtons } from "../SortButtons/index.js"
import { FilterButtons } from "../FilterButtons/index.js"

export function TDSettings() {
    return (
        <div className={"container"}>
            <div className={"buttons"}>
                <SortButtons />
                <FilterButtons />
            </div>
        </div>
    )
}
