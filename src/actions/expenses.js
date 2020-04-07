import { v4 as uuidv4 } from 'uuid'
import database from '../firebase/firebase'
import { connect } from 'react-redux'

//ADD_EXPENSE
export const addExpense=(expense)=>{
    return{
        type:'ADD_EXPENSE',
        expense
    }
   

}

export const startAddExpense=(expenseData={})=>{
    return (dispatch)=>{
        const {
            description='',
            note='',
            amount=0,
            createdAt=0
        }=expenseData
        const expense={description,note,amount,createdAt}

        database.ref('expenses').push(expense).then((ref)=>{
            dispatch(addExpense({
                id:ref.key,
                ...expense
            }))
        })
    }
}

//REMOVE_EXPENSE
export const removeExpense=({id}={})=>{

    return{
        type:'REMOVE_EXPENSE',
        id
    }
}

export const startRemoveExpense=({id})=>{
    return (dispatch)=>{
        database.ref(`expenses/${id}`).remove().then(()=>{
            dispatch(removeExpense({id}))
        })
    }
}


//EDIT_EXPENSE

export const editExpense=(id,updates)=>{
    return{
        type:'EDIT_EXPENSE',
        id,
        updates
    }
}

export const startEditExpense=(id,updates)=>{
    return (dispatch)=>{
        database.ref(`expenses/${id}`).update(updates).then(()=>{
            dispatch(editExpense(id,updates))
        })
    }
}

//SET_EXPENSES

export const setExpenses=(expenses)=>{
    return{
        type:'SET_EXPENSES',
        expenses
    }
}

export const startSetExpenses=()=>{
    return (dispatch)=>{
        const expenses=[]
        return database.ref('expenses').once('value').then((snapshot)=>{
            snapshot.forEach((childSnapshot)=>{
                expenses.push({
                    id:childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpenses(expenses))
        })
    }
}