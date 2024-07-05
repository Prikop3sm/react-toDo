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
          <ul>
            {data ? data.map(person => <li key={person.id}>{person.name}</li>) : null}
          </ul>
        </div>
      </div>
    </>
  )
}