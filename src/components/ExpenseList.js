import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'


export const ExpenseList=(props)=>{
    return(
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-mobile">Expenses</div>
                <div className="show-for-desktop">Expense</div>
                <div className="show-for-desktop">Amount</div>
            </div>
            {   
                props.expenses.length===0&&<p className="list-item list-item--message">Please add an expense</p>
            }
                
            {props.expenses.map((expense)=>{
                return(
                    
                    <ExpenseListItem key={expense.id} expense={expense} />
                    
                )
            })}
        </div>
    )
}

const mapStatetoProps=(state)=>{
    
    
    return{
        expenses:selectExpenses(state.expenses,state.filters)
    }
}

export default connect(mapStatetoProps)(ExpenseList)


//Here react redux helps us by rerendering ExpenseList every time the store changes, connect joins the component to the state of the
//store