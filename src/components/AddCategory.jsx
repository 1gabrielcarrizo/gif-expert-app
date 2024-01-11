import { useState } from "react"


const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState("")

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim().length <= 1) return; // no escribe en la lista si es <=1
    onNewCategory(inputValue.trim()) // se lo envia a la clase padre
    setInputValue("") // limpiamos el input
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}

export default AddCategory