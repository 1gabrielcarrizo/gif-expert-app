import axios from "axios";

/*
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=x9gxiOW8sqFk7nmOsgiBPp909W9sTRm5&q=${ category }&limit=20`
    const resp = await fetch( url );
    const {data} = await resp.json(); // "data" es un arreglo
    const gifs = data.map((img) => ({ // retornamos un objeto
        // extraemos las propiedades que necesitamos
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    console.log(gifs)
    return gifs;
}
*/
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=x9gxiOW8sqFk7nmOsgiBPp909W9sTRm5&q=${ category }&limit=20`
    const resp = await axios(url)
    const {data} = await resp.data; // "data" es un arreglo
    const gifs = data.map((img) => ({ // retornamos un objeto
        // extraemos las propiedades que necesitamos
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    console.log(gifs)
    return gifs;
}