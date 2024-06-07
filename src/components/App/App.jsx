import {useEffect, useState} from 'react'

function App() {
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
     BCEM PRIVET
    </>
  )
}

export default App
