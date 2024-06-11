import {useState} from "react"

export default function InputForm({title}) {
  const [value, setValue] = useState('');
  function inputHandler(e) {
    //test
    setValue(e.target.value);
  }

  return (
    <div className={'asd'}>
      <h3>
        {title}:
      </h3>
      <input value={value} onChange={inputHandler}/>
    </div>
  )
}