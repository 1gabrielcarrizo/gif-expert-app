import { renderHook, waitFor } from "@testing-library/react"
import useFetchGifs from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => {

    test('Debe de regresar el estado inicial', () => {

        // 1 y 2
        const {result} = renderHook(() => useFetchGifs("YOI"))
        const {images, isLoading} = result.current
        // 3
        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
    })

    test('Debe de retornar un arreglo de imagenes y el isLoading en false', async () => {

        // 1 y 2
        const {result} = renderHook(() => useFetchGifs("YOI"))
        await waitFor(
            // 3
            () => expect(result.current.images.length).toBeGreaterThan(0)
            // la linea de abajo es opcional
            // {
            //     timeout: 6000
            // }
        )
        const {images, isLoading} = result.current

        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
    })
})