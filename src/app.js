import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouters'
import configureStore from './store/configureStore'
import {startSetExpenses,removeExpense,editExpense} from './actions/expenses'
import {setTextFilter,setEndDate,setStartDate,sortByDate,sortByAmount} from './actions/filters'
import getVisibleExpenses  from './selectors/expenses'
import 'react-dates/lib/css/_datepicker.css'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import './firebase/firebase'

const store=configureStore()


const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(<p>Loading ...</p>,document.getElementById('app'))

store.dispatch(startSetExpenses()).then(()=>{
    ReactDOM.render(jsx,document.getElementById('app'))
})


