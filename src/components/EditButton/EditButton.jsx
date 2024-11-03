export function EditButton({ onStartEditing }) {
  return (
    <div className={"main-list__edit"} onClick={onStartEditing}>
      <button className={"main-list__pencil"}></button>
    </div>
  )
}
