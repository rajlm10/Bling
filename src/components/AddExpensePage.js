import React from 'react'
import {connect} from 'react-redux'
import {startAddExpense} from '../actions/expenses'
import ExpenseForm from './ExpenseForm'
const AddExpensePage=(props)=>{
    
    
    return (
        <div>
            <h1>Expense Form</h1>
            <ExpenseForm 
            onSubmit={(expense)=>{
                props.dispatch(startAddExpense(expense))
                props.history.push('/')
                
            }}
            />
        </div>
    )
}

export default connect()(AddExpensePage)