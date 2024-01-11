import { useState } from "react"
import {AddCategory, GifGrid} from "./components"


const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Yuri On Ice"])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return; // si ya existe en la lista, no lo agregara de nuevo
        setCategories([newCategory, ...categories]) // spread operator para mantener el arreglo original
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            {/* el componente de abajo es un formulario con un input */}
            <AddCategory
                onNewCategory={onAddCategory}
            />

            {/* se muestra el titulo con gifs por cada categoria ingresada*/}
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}

export default GifExpertApp