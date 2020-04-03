import {addExpense,editExpense,removeExpense} from '../../actions/expenses'

// const add=(a,b)=>{
//     return a+b
// }

// test('add',()=>{
//     const result=add(3,4)
//     expect(result).toBe(7)
// })

test('check object returned from remove expense',()=>{
    const obj=removeExpense({id:'123abc'})
    expect(obj).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    })
})

test('check object returned from edit expense',()=>{
    const obj=editExpense('123abc',{note:'new note'})
    expect(obj).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates:{note:'new note'}
    })
})


test('check object returned from edit expense',()=>{
    const data={
        note:'Rent',
        amount:1000,
        createdAt:1000,
        description:'My rent'
    }
    const obj=addExpense(data)
    expect(obj).toEqual({
      type:'ADD_EXPENSE',
      expense:{
          ...data,
          id:expect.any(String)
      }
    })
})

test('check object returned from edit expense default',()=>{
    const data={
        note:'',
        amount:0,
        createdAt:0,
        description:''
    }
    const obj=addExpense()
    expect(obj).toEqual({
      type:'ADD_EXPENSE',
      expense:{
          ...data,
          id:expect.any(String)
      }
    })
})