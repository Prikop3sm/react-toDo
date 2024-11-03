import { useState } from "react"

export function InputForm({ title, placeholder }) {
  const [value, setValue] = useState("")
  function inputHandler(e) {
    setValue(e.target.value)
  }

  if (title) {
    return (
      <div className={"todo__form-item"}>
        <h3>{title}:</h3>
        <input
          value={value}
          onChange={inputHandler}
          placeholder={placeholder}
          name={title}
        />
      </div>
    )
  }

  return (
    <div className={"todo__form-item"}>
      <input
        value={value}
        onChange={inputHandler}
        placeholder={placeholder}
        name={title}
      />
    </div>
  )
}
