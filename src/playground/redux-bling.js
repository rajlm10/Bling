import {createStore,combineReducers} from 'redux'
import { v4 as uuidv4 } from 'uuid'


//ADD_EXPENSE
const addExpense=({description='',note='',amount=0,createdAt=0}={})=>{
    return{
        type:'ADD_EXPENSE',
        expense:{
            id:uuidv4(),
            description,
            note,
            amount,
            createdAt
        }
    }
   

}

//REMOVE_EXPENSE
const removeExpense=({id})=>{

    return{
        type:'REMOVE_EXPENSE',
        id
    }
}


//EDIT_EXPENSE

const editExpense=(id,updates)=>{
    return{
        type:'EDIT_EXPENSE',
        id,
        updates
    }
}

//Expense reducer

const expensesDefaultState=[]

const expensesReducer=(state=expensesDefaultState,action)=>{
    switch (action.type) {
        case 'ADD_EXPENSE':
            return state.concat(action.expense)
        
        case 'REMOVE_EXPENSE':
            return state.filter((expense)=>{
                expense.id!==action.id
            })

        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                
                
                if (expense.id===action.id) {
                    
                    return{
                        ...expense,
                        ...action.updates
                    }
                }
                return expense
            })
            
        default:
            return state
    }
}

//SET_TEXT
const setTextFilter=(text='')=>{
    return{
        type:'SET_TEXT',
        text
    }
}

//SORT BY DATE
const sortByDate=()=>{
    return{
        type:'SORT_BY_DATE'
    }
}

//SORT BY Amount
const sortByAmount=()=>{
    return{
        type:'SORT_BY_AMOUNT'
    }
}


//SET_START_DATE

const setStartDate=(date=undefined)=>{
    return{
        type:'SET_START_DATE',
        date
    }
}

//SET_END_DATE

const setEndDate=(date=undefined)=>{
    return{
        type:'SET_END_DATE',
        date
    }
}

//Filters reducer

const filtersDefaultState={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}

const filtersReducer=(state=filtersDefaultState,action)=>{

    switch (action.type) {
        case 'SET_TEXT':
            return {
                ...state,
                text:action.text
                
            }
         
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy:'date'
            }
        
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy:'amount'
            }

        case 'SET_START_DATE':
            return{
                ...state,
                startDate:action.date
            }

        case 'SET_END_DATE':
            return{
                ...state,
                endDate:action.date
            }
            
        default:
            return state
    }
}

//Get Visibile Expenses
const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch=typeof startDate!=='number'||expense.createdAt>=startDate
        const endDateMatch=typeof endDate!=='number'||expense.createdAt<=endDate
        const textMatch=expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch&&endDateMatch&&textMatch
    }).sort((a,b)=>{
        if (sortBy==='date') {
            return a.createdAt<b.createdAt?-1:1
        }

        return a.amount<b.amount?1:-1
    })
}

//create store
const store=createStore(combineReducers({
    expenses:expensesReducer,
    filters:filtersReducer
}))

store.subscribe(()=>{
    const state=store.getState()
    const visibleExpenses=getVisibleExpenses(state.expenses,state.filters)
    console.log(visibleExpenses)
})


const expenseOne=store.dispatch(addExpense({description:'Rent is high',amount:1000,createdAt:1000}))

const expenseTwo=store.dispatch(addExpense({description:'Coffee',amount:7000,createdAt:-1000}))

//store.dispatch(removeExpense({id:expenseOne.expense.id}))

// store.dispatch(editExpense(expenseOne.expense.id,{amount:2000}))

//  store.dispatch(setTextFilter('e'))


// store.dispatch(sortByAmount())

// store.dispatch(sortByDate())

// store.dispatch(setStartDate(125))

// store.dispatch(setEndDate(1250))


const demoState={
    expenses:[{
        id:'haihai',
        description:'First expense',
        note:'Demo expense',
        amount:234,
        createdAt:0
    }],

    filters:{
        text:'first',
        sortBy:'amount', //or date
        startDate:undefined,
        endDate:undefined
    }
}