import { useState } from "react"
import AddCategory from "./components/AddCategory"


const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Dragon Ball", "Yuri On Ice"])

    const onAddCategory = () => {
        setCategories([...categories, "One Piece"])
    }

    return (
        <>
        {/* titulo */}

            <h1>GifExpertApp</h1>
            {/* input */}
            <AddCategory setCategories={setCategories}/>

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