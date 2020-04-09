import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import selectTotal from '../selectors/expensesTotal'

const ExpenseSummary=(props)=>{
    return(
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{props.expenses.length}</span> expenses,totalling <span>{props.total}</span></h1>
                <div className="page-header__actions">
                    <Link to="/create" className="button">Add Expense</Link>
                </div>
            </div>
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