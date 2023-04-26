import './../../css/ExpenseItem.css';
import ExpenseDate from './ExpenseDate';


function ExpenseItem(props) {

  return (
      <li key={props.expense.index} className='expense-item'>
        <ExpenseDate date={props.expense.date} />
        <div className='expense-item__description'>
            <h2>{props.expense.title}</h2>
            <p className='expense-item__price'>${props.expense.amount}</p>
        </div>
      </li>
  );
}

export default ExpenseItem;
