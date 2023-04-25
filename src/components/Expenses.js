import './../css/Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    let expenseItems=[];

    (props.expenses).forEach((item, index)=>{
        expenseItems.push(
            <div key={index}>
                <ExpenseItem title={item.title} amount={item.amount} date={item.date}/>
            </div>
        );
    });
    return (
        <div className='expenses'>
            {expenseItems}
        </div>
    );
}

export default Expenses;
