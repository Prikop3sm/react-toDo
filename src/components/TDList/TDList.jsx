import {useState, useEffect} from "react";

export default function TDList(){
  const [data, setData] = useState(0)

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

      </div>
    </>
  )
}