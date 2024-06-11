// import {useEffect, useState} from 'react'
import TDForm from "../TDForm/TDForm.jsx";

function App() {
  // const [data, setData] = useState(0)
  //
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const resp = await fetch('http://localhost:3001/todos')
  //     const todos = await resp.json()
  //     setData(todos)
  //   }
  //   fetchData()
  // }, [])
  //
  // console.log(data)

  return (
    <>
      <TDForm/>
    </>
  )
}

export default App
