import TDList from "../TDList/TDList.jsx";

export default function TDWrapper(){

  return (

    <>
      <div className={'container'}>
        <div className={"main"}>
          <ul className={"main-list"}>
            <TDList/>
          </ul>
        </div>
      </div>
    </>
  )
}