import { useEffect, useState } from "react";

import { getGifs } from "../helpers/getGifs";
import GifItem from "./GifItem";

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
            <div className="card-grid">
                {
                    images.map(( image ) => (
                        <GifItem
                        key={image.id}
                        {...image} // todas las propiedades que vienen en el image las esparcimos
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid