import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import selectTotal from '../selectors/expensesTotal'

const ExpenseSummary=(props)=>{
    return(
        <div>
        <h1>Viewing {props.expenses.length} expenses,totalling {props.total}</h1>


        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        expenses:selectExpenses(state.expenses,state.filters),
        total:selectTotal(selectExpenses(state.expenses,state.filters))
    }
}

export default connect(mapStateToProps)(ExpenseSummary)