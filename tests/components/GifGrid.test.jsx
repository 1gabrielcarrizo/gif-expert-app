import { render, screen } from "@testing-library/react"
import GifGrid from "../../src/components/GifGrid"
import useFetchGifs from "../../src/hooks/useFetchGifs"

jest.mock("../../src/hooks/useFetchGifs") // para el hook agregamos esta linea

describe('pruebas en el componente <GifGrid/>', () => {

    const category = "Spy x Family"

    test('debe de mostrar el loading inicialmente', () => {

        // 1
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        // 2
        render(<GifGrid category={category} />)
        // 3
        expect(screen.getByText("Cargando..."))
        expect(screen.getByText(category))
    })

    test('debe de mostrar items cuando se carguen las imagenes', () => {

        // 1
        const gifs = [
            {
                id: "ABC",
                title: "Hora de aventura",
                url: "https://localhost.com/finn.png"
            },
            {
                id: "123",
                title: "Goku",
                url: "https://localhost.com/goku.png"
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        // 2 
        render(<GifGrid category={category} />)
        // 3
        expect(screen.getAllByRole('img').length).toBe(2);
    })
})