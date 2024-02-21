import { useState } from "react"
import {AddCategory, GifGrid} from "."



const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return; // si la categoria esta en la lista, no la agrega de nuevo
        setCategories([newCategory, ...categories]) // caso contrario la agrega con spread operator
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            {/* el componente de abajo es un formulario con un input */}
            <AddCategory
                onNewCategory={onAddCategory} // pasamos la funcion como props
            />

            {/* se muestra el titulo con gifs por cada categoria ingresada*/}
            {
                categories.map((category) => ( // se recorre el array con el "map"
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