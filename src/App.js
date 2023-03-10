import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import UseStateExample from './components/test/useStateExample';
import AddExpense from './components/AddExpense/AddExpense';

const App = () => {
  const dummy_expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [filterYear, setFilterYear] = useState('');
  const addNewExpense = (expense) => {
    setExpenses((preExpense)=>{return [expense, ...preExpense]});
  }

  const filterYearHandler = (year) => {
    setFilterYear(year)
  }
  const [expenses, setExpenses] = useState(dummy_expenses);
  return (
    <div>
      <AddExpense onAddNewExpense={addNewExpense} filterYearHandler={filterYearHandler}/>
      <Expenses items={expenses} filterYear={filterYear}/>
      {/* <UseStateExample /> */}
    </div>
  );
}

export default App;
