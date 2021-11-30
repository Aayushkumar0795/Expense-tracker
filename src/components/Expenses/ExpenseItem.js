import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

function ExpenseItem(props) {

    // const [title, setTitle] = useState(props.title);

    // function clickHandler() {
    //     setTitle('Updated!!!')
    //     console.log(title);
    // }

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date}></ExpenseDate>
                <div className='expense-item__description'><h2>{props.title}</h2></div>
                <div className='expense-item__price'>${props.amount}</div>
                {/* <button onClick={clickHandler}>Update...</button> */}
            </Card>
        </li>
    )
}
export default ExpenseItem;