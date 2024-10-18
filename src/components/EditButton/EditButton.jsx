export default function EditButton({ onStartEditing }) {

  return (
    <div className={"main-list__edit"} onClick={onStartEditing}>
      <div className={"main-list__small"}></div>
      <div className={"main-list__big"}></div>
    </div>
  )
}