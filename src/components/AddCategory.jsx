import { useState } from "react"
import PropTypes from 'prop-types'

const AddCategory = ({ onNewCategory }) => { // extraemos la funcion que pasamos como props

  const [inputValue, setInputValue] = useState("")

  const onInputChange = ({ target }) => { // desestructuracion del "target" para el input
    setInputValue(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim().length <= 1) return; // no se agrega a la lista si lo que se escribe es <=1
    onNewCategory(inputValue.trim()) // se lo envia a la clase padre
    setInputValue("") // limpiamos el input
  }

  return (
    <form onSubmit={handleSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}

export default AddCategory