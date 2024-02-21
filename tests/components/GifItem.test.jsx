import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('Pruebas en el componente <GifItem/>', () => {

    // 1 - inicializacion de variables globales
    const title = "Yuri Katsuki"
    const url = "https://yuri-on-ice.com/yuri_katsuki.png"

    test('debe de hacer match con el snapshot', () => {
        // 2 - para hacer la evaluacion del snapshot se debe usar el container
        const { container } = render(<GifItem title={title} url={url} />)
        // 3 - observacion
        expect(container).toMatchSnapshot()
    })

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {

        // 2 - renderizamos nuestro componente
        render(<GifItem title={title} url={url} />)
        // screen.debug()
        // 3 - observacion
        // expect(screen.getByRole('img').src).toBe( url )
        // expect(screen.getByRole('img').alt).toBe( title )
        // podemos simplificar el codigo de la siguiente manera
        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('debe de mostrar el titulo en el componente', () => {
        // 2 - renderizamos nuestro componente
        render(<GifItem title={title} url={url} />)
        // 3 - observacion
        expect(screen.getByText(title)).toBeTruthy();
    })
})