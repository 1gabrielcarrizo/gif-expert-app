import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"


const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Dragon Ball", "Yuri On Ice"])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return; // si ya existe en la lista, no lo agregara de nuevo
        setCategories([...categories, newCategory])
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
                        cateogry={category}
                    />
                ))
            }

        </>
    )
}

export default GifExpertApp