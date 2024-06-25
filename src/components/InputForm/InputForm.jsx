import {useState} from "react"

export default function InputForm({title, placeholder}) {
  const [value, setValue] = useState('');
  function inputHandler(e) {
    //test
    setValue(e.target.value);
  }

  return (
    <div className={'todo__inner'}>
      <h3>
        {title}:
      </h3>
      <input className={"todo__inner-input"} value={value} onChange={inputHandler} placeholder={placeholder}/>
    </div>
  )
}