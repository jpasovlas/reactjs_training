import React from "react";
import './../../css/NewExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {

    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : 'e' + Math.random().toString()
        };

        props.onAddExpense(expenseData);
    };

    return (<div className="new-expense">
        <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>);
};

export default NewExpense;