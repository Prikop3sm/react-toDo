import {useState} from "react"

export default function InputForm({title, placeholder}) {
  const [value, setValue] = useState('');
  function inputHandler(e) {
    //test
    setValue(e.target.value);
  }

  return (
    <div className={'todo__form-item'}>
      <h3>
        {title}:
      </h3>
      <input value={value} onChange={inputHandler} placeholder={placeholder} name={title}/>
    </div>
  )
}