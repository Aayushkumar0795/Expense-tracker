import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react/cjs/react.development'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpenseChart'



function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear().toString() === filteredYear);


    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onSaveFilterData={filterChangeHandler} />

            <ExpensesChart expenses={filteredExpenses} />

            <ExpensesList items={filteredExpenses}></ExpensesList>

        </Card>
    )
}

export default Expenses;