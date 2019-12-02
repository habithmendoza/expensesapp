import React from 'react';
import '../ControlBudget/ControlBudget.css';

const ControlBudget = (props) => {
    const balance = props.balance;
    const budget = props.budget;
    const totalExpense = props.totalExpense;

    const checkBalance = (budget, balance) => {
        let className;
        if ((budget / 4) > balance) {
            className = 'cardR balance danger'
        } else if ((budget / 2) > balance) {
            className = 'cardR balance alert'
        } else {
            className = 'cardR balance'
        }
        return className;
    }

    return (
        <div className='container-cb'>
            <div className='cardR budget'>
                <h3>Presupuesto:</h3>
                <h3>${budget}</h3>
            </div>
            <div className={checkBalance(budget, balance)}>
                <h3>Saldo:</h3>
                <h3>${balance}</h3>
            </div>
            <div className='cardR totalExp'>
                <h3>Total gastos:</h3>
                <h3>${totalExpense}</h3>
            </div>
        </div>
    )
}

export default ControlBudget;