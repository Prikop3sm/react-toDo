export function Checkbox({ toggleCompleteTodo, isComplete }) {
    if (!isComplete) {
        return (
            <div className={"main-list__checkbox"} onClick={toggleCompleteTodo}>
                <div className={"main-list__checkboxLeft"}></div>
                <div className={"main-list__checkboxTop"}></div>
                <div className={"main-list__checkboxRight"}></div>
                <div className={"main-list__checkboxBottom"}></div>
            </div>
        )
    }
    return (
        <div className={"main-list__undo"} onClick={toggleCompleteTodo}>
            <div className={"main-list__small"}></div>
            <div className={"main-list__big"}></div>
        </div>
    )
}
