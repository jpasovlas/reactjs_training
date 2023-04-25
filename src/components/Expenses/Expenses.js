import './../../css/Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    return (
        <div className='expenses'>
            <ExpenseItem expenses={props.expenses} />
        </div>
    );
}

export default Expenses;
