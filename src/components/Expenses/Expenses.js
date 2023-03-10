import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  console.log("Filter", props.filterYear);
  const filterList = props.items.filter((item) => {console.log("Item:",item); return (new Date(item.date).getFullYear().toString() === props.filterYear) })
  let expenseContent = <p style={{ color: 'white' }}>No expenses found.</p>
  if (filterList.length > 0) {
    expenseContent = filterList.map((item) => {
      return <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    })
  }
  return (
    <Card className="expenses">
      {expenseContent}
    </Card>
  );
}
export default Expenses;