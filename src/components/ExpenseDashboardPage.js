import React from 'react'
import ExpenseSummary from './ExpenseSummary'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
const ExpenseDashboardPage=()=>{
    return (
        <div>
            <ExpenseSummary/>
            <ExpenseListFilters/>
            <ExpenseList />
        </div>
    )
}

export default ExpenseDashboardPage