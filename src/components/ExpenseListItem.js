import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const ExpenseListItem=(props)=>{
    return(
        <Link to={`/edit/${props.expense.id}`} className="list-item">
            <div>
                <h3 className="list-item__title">{props.expense.description}</h3>
                <span className="list-item__subtitle">{moment(props.expense.createdAt).format('MMMM Do,YYYY')}</span>
            </div>
            <h3 className="list-item__data">{props.expense.amount}</h3>
        </Link>
    )
}

export default (ExpenseListItem)