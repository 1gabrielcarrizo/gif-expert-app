import { useState } from "react"
import AddCategory from "./components/AddCategory"


const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Dragon Ball", "Yuri On Ice"])

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return; // si ya existe en la lista, no lo agregara de nuevo
        setCategories([...categories, newCategory])
    }

    return (
        <>
            {/* titulo */}

            <h1>GifExpertApp</h1>
            {/* input */}
            <AddCategory
                onNewCategory={onAddCategory}
            // setCategories={setCategories}
            />

            {/* listado de gif */}

            <ol>
                {categories.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ol>
            {/* gif item */}
        </>
    )
}

export default GifExpertApp