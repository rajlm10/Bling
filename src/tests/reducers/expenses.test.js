import expensesReducer from '../../reducers/expenses'
import moment from 'moment'

const expenses=[{
    id:1,
    description:'Gum',
    note:'',
    amount:195,
    createdAt:0
},
{
    id:2,
    description:'Rent',
    note:'',
    amount:109500,
    createdAt:moment(0).subtract(4,'days').valueOf()
},
{
    id:3,
    description:'Credit Card',
    note:'',
    amount:4500,
    createdAt:moment(0).add(4,'days').valueOf()
}]

test('should check default state',()=>{
    const state=expensesReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual([])
})


test('remove expense by id',()=>{
    const state=expensesReducer(expenses,{type:'REMOVE_EXPENSE',id:expenses[1].id})
    expect(state).toEqual([expenses[0],expenses[2]])
})

test('dont remove expense if id not found',()=>{
    const state=expensesReducer(expenses,{type:'REMOVE_EXPENSE'})
    expect(state).toEqual([...expenses])
})

test('add expense',()=>{
    const newExpense={
        id:'4',
        description:'I am new',
        note:'',
        amount:710,
        createdAt:moment(0).add(30,'days').valueOf()
    }
    const state=expensesReducer(expenses,{type:'ADD_EXPENSE',expense:newExpense})
    expect(state).toEqual([...expenses,newExpense])
})

test('edit expense',()=>{
    const editExpense={
        description:'I am edited',

    }
    const state=expensesReducer(expenses,{type:'EDIT_EXPENSE',id:expenses[2].id,updates:editExpense})
    expect(state).toEqual([expenses[0],expenses[1],state[2]])
})

test('dont edit expense if no id',()=>{
    const editExpense={
        description:'I am edited',

    }
    const state=expensesReducer(expenses,{type:'EDIT_EXPENSE',updates:editExpense})
    expect(state).toEqual([...expenses])
})
