import { fireEvent, render, screen } from "@testing-library/react"
import AddCategory from "../../src/components/AddCategory"

describe('pruebas en el componente <AddCategory/>', () => {

    test('debe de cambiar el valor de la caja de texto', () => {

        // 1
        render(<AddCategory onNewCategory={() => { }} />)
        // 2 - obtener la referencia del evento
        const input = screen.getByRole('textbox')
        fireEvent.input(input, { target: { value: 'Yuri Katsuki' } })
        // 3 - observacion
        expect(input.value).toBe("Yuri Katsuki")
    })

    test('debe de llamar a la funcion onNewCategory si el input tiene un valor', () => {

        // 1
        const inputValue = "Yuri Katsuki" // lo que quiero que tenga de valor el input
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        // 2
        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form) // llamamos a la funcion onSubmit
        // 3
        expect(input.value).toBe("");
        expect(onNewCategory).toHaveBeenCalled(); // averiguamos si la funcion fue llamada
        expect(onNewCategory).toHaveBeenCalledTimes(1); // averiguamos si la funcion fue llamada 1 vez
        expect(onNewCategory).toHaveBeenCalledWith(inputValue); // si fue llamada con el valor
    })

    test('no debe de llamar a la funcion onNewCategory si el input esta vacio', () => {

        // 1
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />)
        const form = screen.getByRole('form')
        // 2
        fireEvent.submit(form) // llamamos a la funcion onSubmit
        // 3
        expect(onNewCategory).toHaveBeenCalledTimes(0); // averiguamos si la funcion fue llamada 0 veces
        expect(onNewCategory).not.toHaveBeenCalled(); // averiguamos si la funcion no fue llamada
    })
})