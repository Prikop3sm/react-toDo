import {useState, useEffect} from "react";

export default function TDList(){
  const [data, setData] = useState(0)
  // const persons = JSON.stringify(data);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('http://localhost:3001/todos')
      const todos = await resp.json()
      setData(todos)
    }
    fetchData()
  }, [])


  console.log(data)
  return (
    <>
      <div className={'container'}>
        <div className={"main"}>
          <ul className={"main-list"}>
            {data ? data.map(person => <li className={"main-list__item"} key={person.description}>
              <h2 className={"main-list__title"}>{person.title}</h2>
              <h3 className={"main-list__description"}>{person.description}</h3>
            </li>) : null}
          </ul>
        </div>
      </div>
    </>
  )
}