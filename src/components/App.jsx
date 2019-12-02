import React, { useState } from 'react';
import './App.css';
import Header from '../components/Header/Header.js';
import Form from '../components/Form/Form';
import List from '../components//List/List';
import ControlBudget from '../components/ControlBudget/ControlBudget';
import InitialModal from '../components/InitialModal/InitialModal';
import PopUp from '../components/PopUp/PopUp';

const App = () => {
  const [showModal, setShowModal] = useState(true);
  const [popUp, setPopUp] = useState({
    state: false,
    info: ''
  });
  const [budget, setBudget] = useState(0);
  const [balance, setBalance] = useState(0);
  const [expense, setExpense] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  const isABudget = (bget) => {
    setBudget(bget);
    setBalance(bget);
    setShowModal(false);

  }

  const saveExpense = (exp) => {
    const nameExp = exp.nameExpenseRef;
    const valueExp = exp.valueExpenseRef;
    if (nameExp) {
      if (valueExp > 0) {
        const newExpense = {
          id: Date.now(),
          name: nameExp,
          value: valueExp
        };
        setExpense([...expense, newExpense]);
        sumExpenses(newExpense.value);
        finalBudget(newExpense.value);
        setPopUp({ state: false });
      } else {
        validatePopUp('Ingresa un valor válido')
      }
    } else {
      validatePopUp('Ingresa un nombre válido')
    }
  }

  const finalBudget = (exp) => {
    const expense = Number(exp);
    setBalance(balance - expense);
  }

  const sumExpenses = (exp) => {
    const expense = Number(exp);
    setTotalExpense(totalExpense + expense)
  }

  const validatePopUp = (info) => {
    setPopUp({
      state: true,
      info: { info }
    });
  }

  return (
    <div className='container'>
      {showModal ? <InitialModal isABudget={isABudget} /> : false}
      <Header title='Gastos' />
      <div className='main'>
        <div className='main-container'>
          <div className='form-container'>
            <Form saveExpense={saveExpense} />
            {popUp.state ? <PopUp infoPopUp={popUp.info} /> : false}
          </div>
          <div className='list-container'>
            <List expense={expense} />
            <ControlBudget budget={budget} balance={balance} totalExpense={totalExpense} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
