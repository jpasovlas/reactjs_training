import React from 'react';

import './../../css/ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const filterYearHandler = (event) => {
    props.onChangeYear(event.target.value);
  };
  const yearOptions = [
    '2020',
    '2021',
    '2022',
    '2023',
  ];

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterYearHandler}>
          {yearOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;