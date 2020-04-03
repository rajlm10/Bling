import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'


export const ExpenseList=(props)=>{
    return(
        <div>
            {
                props.expenses.length===0&&<p>Please add an expense</p>
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