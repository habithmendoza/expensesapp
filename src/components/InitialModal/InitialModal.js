import React from 'react'
import '../InitialModal/InitialModal.css';

const InitialModal = (props) => {
    const budgetRef = React.createRef();

    const handleSubmit = e => {
        e.preventDefault();
        const budget = budgetRef.current.value;
        if (budget > 0) {
            props.isABudget(budget);
        }
    }

    return (
        <div className='overlay'>
            <div className='modal'>
                <div className='modal-header'>
                    <h2>Ingresa tu presupuesto</h2>
                </div>
                <div className='modal-body'>
                    <form onSubmit={handleSubmit}>
                        <input ref={budgetRef} type="text"></input>
                        <button className='btn-submit' type="submit">CONTINUAR</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default InitialModal;