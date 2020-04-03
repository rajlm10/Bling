import getVisibleExpenses from '../../selectors/expenses'
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

test('filter by text',()=>{
    const filters={
        text:'e',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const results=getVisibleExpenses(expenses,filters)
    expect(results).toEqual([
        expenses[1],
        expenses[2]
    ])
})

test('filter by startDate',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }
    const results=getVisibleExpenses(expenses,filters)
    expect(results).toEqual([
        expenses[0],
        expenses[2]
    ])
})

test('filter by endDate',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0).add(1,'day')
    }
    const results=getVisibleExpenses(expenses,filters)
    expect(results).toEqual([
        expenses[1],
        expenses[0]
    ])
})

test('sort by date',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const results=getVisibleExpenses(expenses,filters)
    expect(results).toEqual([
        expenses[1],
        expenses[0],
        expenses[2]
    ])
})

test('sort by amount',()=>{
    const filters={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const results=getVisibleExpenses(expenses,filters)
    expect(results).toEqual([
        expenses[1],
        expenses[2],
        expenses[0]
    ])
})