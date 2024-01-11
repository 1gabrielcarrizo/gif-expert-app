import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (category) => {

    const [images, setImages] = useState([]) // para mostrar las imagenes creamos un useState local
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => { // como no se puede usar el "async" en el useEffect, se crea esta funcion
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false)
    }

    useEffect(() => {
        getImages(); // se llama la funcion asincrona adentro del useEffect
    }, [])

    return { // regresa un objeto
        images,
        isLoading
    }
}

export default useFetchGifs