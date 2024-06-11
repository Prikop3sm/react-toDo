import {useState} from "react"
import "./TInputForm.scss"

export default function InputForm({title}) {
  const [value, setValue] = useState('');
  function inputHandler(e) {
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