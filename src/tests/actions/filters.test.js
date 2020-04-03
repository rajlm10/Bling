import {setEndDate,setStartDate,setTextFilter,sortByAmount,sortByDate} from '../../actions/filters'
import moment from 'moment'

test('setStartDate',()=>{
    const action=setStartDate(moment(0))
    expect(action).toEqual({
        type:'SET_START_DATE',
        date:moment(0)
    })
})

test('setEndDate',()=>{
    const action=setEndDate(moment(0))
    expect(action).toEqual({
        type:'SET_END_DATE',
        date:moment(0)
    })
})

test('setTextFilter',()=>{
    const action=setTextFilter('Raj')
    expect(action).toEqual({
        type:'SET_TEXT',
        text:'Raj'
    })
})

test('setTextFilter default',()=>{
    const action=setTextFilter()
    expect(action).toEqual({
        type:'SET_TEXT',
        text:''
    })
})

test('sortByDate',()=>{
    const action=sortByDate()
    expect(action).toEqual({
        type:'SORT_BY_DATE',
        
    })
})

test('sortByAmount',()=>{
    const action=sortByAmount()
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT',
        
    })
})