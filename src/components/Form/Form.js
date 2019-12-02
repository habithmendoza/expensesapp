import React from 'react';
import '../Form/Form.css';

const Form = (props) => {

    let nameExpenseRef = React.createRef();
    let valueExpenseRef = React.createRef();

    const createExpense = e => {
        e.preventDefault();
        const expenses = {
            nameExpenseRef: nameExpenseRef.current.value,
            valueExpenseRef: valueExpenseRef.current.value
        }
        props.saveExpense(expenses);
        return e.currentTarget.reset();
    }

    return (
        <form className='form' onSubmit={createExpense}>
            <h2>Ingresa tus gastos</h2>
            <label>Nombre gasto</label>
            <input ref={nameExpenseRef} type="text" placeholder='Ej: Transporte' />
            <label>Valor</label>
            <input ref={valueExpenseRef} type="text" placeholder='Ej: 50.000' />
            <button className='button-form' type="submit">AGREGAR</button>
        </form>
    )
}

export default Form;