import { render, screen } from "@testing-library/react"
import GifExpertApp from "../../src/components/GifExpertApp"

describe('pruebas en el componente <GifExpertApp/>', () => {

    test('', () => {
        render(<GifExpertApp />)
        screen.debug()
    })
})