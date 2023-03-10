import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
const AddExpense = (props) => {
    const [expense, setExpense] = useState('');
    const [date, setDate] = useState('');
    const [cost, setCost] = useState('');
    const [isAdd, setIsAdd] = useState(false);
    const handleExpense = (event) => {
        setExpense(event.target.value);
    }
    const handleDate = (event) => {
        let date = new Date(event.target.value);
        setDate(event.target.value);

    }
    const handleCost = (event) => {
        setCost(event.target.value);
    }
    const addNewExpense = () => {
        let exp = {
            id: Date.now(),
            title: expense,
            amount: cost,
            date: date
        }
        if(exp.title.length>0&&exp.amount>0) {
            props.onAddNewExpense(exp);
            setIsAdd(false)
            setExpense("");
            setDate("");
            setCost("")
        }
    }
    const handleYearSelection = (selectedYear) => {
        props.filterYearHandler(selectedYear);
    }
    const showExpenseInput = () => {
        setIsAdd(true)
    }
    return (
        <div>
            {isAdd ? <div>
                <div>
                    <label>Expense</label>
                    <input type="text" value={expense} onChange={handleExpense} />
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" value={date} onChange={handleDate} />
                </div>
                <div>
                    <label>cost</label>
                    <input type="text" value={cost} onChange={handleCost} />
                </div>
                <input type="button" name="Submit" value="Add New Expense" onClick={addNewExpense} />
            </div> : <input type="button" name="Submit" value="Add New Expense" onClick={showExpenseInput} />}
            <ExpensesFilter handleYearSelection={handleYearSelection} />
        </div>
    )
}

export default AddExpense;