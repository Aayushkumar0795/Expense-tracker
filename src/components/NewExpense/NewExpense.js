import React, { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        console.log(expenseData)
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const cancelButtonHandler = () => {
        setIsEditing(false)
    }

    if (!isEditing) {
        return (
            <div className='new-expense'>
                <button onClick={startEditingHandler}>Add Expense</button>
            </div>)
    }

    if (isEditing) {
        return (
            <div className='new-expense'>
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelButtonHandler}></ExpenseForm>
            </div>
        )
    }

}

export default NewExpense;