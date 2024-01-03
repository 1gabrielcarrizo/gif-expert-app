import { useState } from "react"


const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Dragon Ball", "Yuri On Ice"])
    console.log(categories)

    return (
        <>
        {/* titulo */}

            <h1>GifExpertApp</h1>
            {/* input */}

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