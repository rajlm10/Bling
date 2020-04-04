import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const ExpenseListItem=(props)=>{
    return(
        <div>
            <h3><Link to={`/edit/${props.expense.id}`}>{props.expense.description}</Link></h3>
            <p>{props.expense.amount} -  
            {moment(props.expense.createdAt).format('MMMM Do,YYYY')}</p>

        </div>
    )
}

export default (ExpenseListItem)