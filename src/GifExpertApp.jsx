import { useState } from "react"


const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Dragon Ball", "Yuri On Ice"])
    console.log(categories)

    const onAddCategory = () => {
        setCategories([...categories, "One Piece"])
    }

    return (
        <>
        {/* titulo */}

            <h1>GifExpertApp</h1>
            {/* input */}

            {/* listado de gif */}
            <button onClick={onAddCategory}>Agregar</button>

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