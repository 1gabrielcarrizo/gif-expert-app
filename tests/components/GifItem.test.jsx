import { render } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('Pruebas en el componente <GifItem/>', () => {

    // 1 - inicializacion de variables globales
    const title = "Yuri Katsuki"
    const url = "https://yuri-on-ice.com/yuri_katsuki.png"

    test('debe de hacer match con el snapshot', () => {
        // 2 - para hacer la evaluacion del snapshot se debe usar el container
        const { container } = render(<GifItem title={ title } url={ url } />)
        // 3 - observacion
        expect(container).toMatchSnapshot()
    })
})