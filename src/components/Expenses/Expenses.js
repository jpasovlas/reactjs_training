import React, { useState } from 'react';
import './../../css/Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../NewExpense/ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filterYear, setFilterYear] = useState('2023');
    const filterYearHandler = selectedYear => {
      setFilterYear(selectedYear);
    };
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    });

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filterYear} onChangeYear={filterYearHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList filteredExpenses={filteredExpenses} />
        </Card>
    );
}

export default Expenses;
