import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"


const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Yuri On Ice"])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return; // si ya existe en la lista, no lo agregara de nuevo
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />

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