import { v4 as uuidv4 } from 'uuid'


//ADD_EXPENSE
export const addExpense=({description='',note='',amount=0,createdAt=0}={})=>{
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
export const removeExpense=({id}={})=>{

    return{
        type:'REMOVE_EXPENSE',
        id
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