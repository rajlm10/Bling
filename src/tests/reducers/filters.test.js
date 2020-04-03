import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('check for default values initially',()=>{
    const state=filtersReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})


test('set sort by to amount',()=>{
    const state=filtersReducer(undefined,{type:'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('set sort by to date',()=>{
    const state=filtersReducer({
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    },{type:'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date')
})


test('set text',()=>{
    const state=filtersReducer(undefined,{type:'SET_TEXT',text:'hey'})
    expect(state.text).toBe('hey')
})

test('set start date',()=>{
    const state=filtersReducer(undefined,{type:'SET_START_DATE',date:moment(12)})
    expect(state.startDate.valueOf()).toBe(moment(12).valueOf())
})

test('set end date',()=>{
    const state=filtersReducer(undefined,{type:'SET_END_DATE',date:moment(12)})
    expect(state.endDate.valueOf()).toBe(moment(12).valueOf())
})