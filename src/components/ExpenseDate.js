import './../css/ExpenseDate.css';

function ExpenseDate(props) {
    const expenseDate = {
        day : props.date.toLocaleString('en-US', {day : '2-digit'}),
        month : props.date.toLocaleString('en-US', {month : 'long'}),
        year : props.date.getFullYear()
    };

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{expenseDate.month}</div>
            <div className='expense-date__day'>{expenseDate.day}</div>
            <div className='expense-date__year'>{expenseDate.year}</div>
        </div>
    );
}

export default ExpenseDate;
