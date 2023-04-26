import './../../css/ExpensesList.css';
import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {
    let expenseItemContent = (<h2 className='expenses-list__fallback    '>No expenses found.</h2>);

    if (props.filteredExpenses.length > 0) {
        expenseItemContent = props.filteredExpenses.map((item, index) => (
            <ExpenseItem expense={item} key={index} />
        ));
    }

    return (<ul className='expenses-list'>
        {expenseItemContent}
    </ul>);
}

export default ExpensesList;