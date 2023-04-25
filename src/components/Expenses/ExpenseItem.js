import React, { useState } from 'react';
import './../../css/ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './../UI/Card';
import ExpensesFilter from '../NewExpense/ExpenseFilter';


function ExpenseItem(props) {
  const expenseValues = Object.keys(props.expenses).map((key) => props.expenses[key]);
  // const [expenses, setExpenses] = useState(expenseValues);
  const [expenses] = useState(expenseValues);

  // const changeTitleHandler = (index, title) => {
  //   setExpenses(prevExpenses => {
  //     let newExpenses = [...prevExpenses];
  //     newExpenses[index].title = 'Updated!';
  //     return newExpenses;
  //   });
  // };
  const [filterYear, setFilterYear] = useState('2021');
  const filterYearHandler = selectedYear => {
    setFilterYear(selectedYear);
    console.log('Selected Year: ' + selectedYear);
  };

  return (
      <Card className='expenses'>
        <ExpensesFilter selected={filterYear} onChangeYear={filterYearHandler} />
        {expenses.map((item, index) => (
          <div key={index} className='expense-item'>
            <ExpenseDate date={item.date} />
            <div className='expense-item__description'>
                {/* <h2>{expenses[index].title}</h2> */}
                <h2>{item.title}</h2>
                <p className='expense-item__price'>${item.amount}</p>
            </div>
            {/* <button onClick={() => changeTitleHandler(index, item.title)}>Change Title</button> */}
          </div>
        ))}
      </Card>
  );
}

export default ExpenseItem;
