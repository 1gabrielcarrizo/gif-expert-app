import { useState } from "react"


const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState("")

    const onInputChange = ({target}) => {
        console.log(target.value)
        setInputValue(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length <= 1) return; // no escribe en la lista si es <=1
        setCategories(categories => [...categories, inputValue]) // nos comunicamos con el useState del padre
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