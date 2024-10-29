export default function SortButtons(){

  function onAZSort(){
    localStorage.setItem("sort", "a-z")
  }
  function onZASort(){
    localStorage.setItem("sort", "z-a")
  }

  return (
    <>
      <div className={"container"}>
        <div className={"buttons"}>
          <button className={"buttons-item"} onClick={onAZSort}>sort A-Z</button>
          <button className={"buttons-item"} onClick={onZASort}>sort Z-A</button>
        </div>
      </div>
    </>
  )
}
