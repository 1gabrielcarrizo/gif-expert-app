import { fireEvent, render, screen } from "@testing-library/react"
import AddCategory from "../../src/components/AddCategory"

describe('pruebas en el componente <AddCategory/>', () => {

    test('debe de cambiar el valor de la caja de texto', () => {

        // 1
        render(<AddCategory onNewCategory={ () => {} }/>)
        // 2 - obtener la referencia del evento
        const input = screen.getByRole('textbox')
        fireEvent.input( input, {target: {value: 'Yuri Katsuki'}} )
        // 3 - observacion
        expect(input.value).toBe("Yuri Katsuki")
    })
})