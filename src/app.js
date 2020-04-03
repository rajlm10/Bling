import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouters'
import configureStore from './store/configureStore'
import {addExpense,removeExpense,editExpense} from './actions/expenses'
import {setTextFilter,setEndDate,setStartDate,sortByDate,sortByAmount} from './actions/filters'
import getVisibleExpenses  from './selectors/expenses'
import 'react-dates/lib/css/_datepicker.css'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store=configureStore()

store.dispatch(addExpense({description:'Water bill',amount:3400}))
store.dispatch(addExpense({description:'Gas bill',amount:1900,createdAt:1000}))
store.dispatch(addExpense({description:'Rent',amount:7300}))


const state=store.getState()
const visibleExpenses=getVisibleExpenses(state.expenses,state.filters)
console.log(visibleExpenses)

console.log(store.getState())

const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)


ReactDOM.render(jsx,document.getElementById('app'))
