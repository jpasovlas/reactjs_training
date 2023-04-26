import React, {useState} from "react";
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
    const [expenseFormFlag, setExpenseFormFlag] = useState(false);
    const addExpenseHandler = (expenseFlag) => {
        setExpenseFormFlag(prevFlag => { return expenseFlag; });
    };
    const newExpenseContent = expenseFormFlag ?
        (<ExpenseForm onCancel={() => addExpenseHandler(false)} onSaveExpense={saveExpenseHandler} />) :
        (<button onClick={() => addExpenseHandler(true)}>Add New Expense</button>);

    return (<div className="new-expense">
        {newExpenseContent}
    </div>);
};

export default NewExpense;