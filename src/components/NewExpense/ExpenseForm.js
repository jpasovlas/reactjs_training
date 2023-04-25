import React, { useState } from "react";
import './../../css/ExpenseForm.css';

function ExpenseForm(props) {
    const today = new Date();
    const maxDate = today.getFullYear() + '-' + today.getDate() + '-' + (today.getMonth()+1);
    const expenseFields = {
        title : '',
        amount : '',
        date : '',
    };
    const [expenseFormValues, setExpenseFormValues] = useState(expenseFields);

    const titleHandler = (event) => {
        setExpenseFormValues((prevState) => {
            return {
                ...prevState,
                title : event.target.value
            };
        });
    };

    const amountHandler = (event) => {
        setExpenseFormValues((prevState) => {
            return {
                ...prevState,
                amount : event.target.value
            };
        });
    };

    const dateHandler = (event) => {
        setExpenseFormValues((prevState) => {
            return {
                ...prevState,
                date : event.target.value
            };
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        props.onSaveExpense(expenseFormValues);
        setExpenseFormValues(expenseFields);
    };

    return (<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={expenseFormValues.title} onChange={titleHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={expenseFormValues.amount} onChange={amountHandler} min="0.01" step="0.01" />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date"  value={expenseFormValues.date} onChange={dateHandler} min="2023-01-01" max={maxDate} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>);
};

export default ExpenseForm;