import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category) // llamamos nuestro custom hook

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