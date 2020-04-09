import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {startEditExpense,startRemoveExpense} from '../actions/expenses'

const EditExpensePage=(props)=>{
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Like to make changes?</h1>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm
                expense={props.expense}
                onSubmit={(expense)=>{
                    props.dispatch(startEditExpense(props.expense.id,expense))
                    props.history.push('/')
                    
                }}
                
                />
                <button onClick={()=>{
                    props.dispatch(startRemoveExpense({id:props.expense.id}))
                    props.history.push('/')
                }}
                className="button button__remove"
                >
                Remove
                </button>
            </div>
        </div>
    )
}

const mapStateToProps=(state,props)=>{
    return{
        expense:state.expenses.find((expense)=>{
            return expense.id===props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditExpensePage)