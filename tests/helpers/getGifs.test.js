import { getGifs } from "../../src/helpers/getGifs"

describe('pruebas en el archivo getGifs', () => {

    test('debe de retornar un arreglo de gifs', async () => { // usamos el "async"

        // 1 y 2
        const gifs = await getGifs("Spy x Family")
        // 3 que el arreglo sea mayor que 0
        expect( gifs.length ).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({ // si es mayor que 0, verificar que las propiedades sean un String
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        })
    })
})