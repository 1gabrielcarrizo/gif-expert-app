import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]) // para mostrar las imagenes creamos un useState local

    const getImages = async () => { // como no se puede usar el "async" en el useEffect, se crea esta funcion
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(() => {
        getImages(); // se llama la funcion asincrona adentro del useEffect
    }, [])


    return (
        <>
            <h3>{ category }</h3>
            <ol>
                {
                    images.map(( {id, title} ) => (
                        <li key={ id }>{ title }</li>
                    ))
                }
            </ol>
        </>
    )
}

export default GifGrid