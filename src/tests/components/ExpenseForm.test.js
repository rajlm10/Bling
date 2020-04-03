import React from 'react'
import {shallow} from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
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

test('render expense form',()=>{
    const wrapper=shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
})

test('render expense form with expense',()=>{
    const wrapper=shallow(<ExpenseForm expense={expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('render error for invalid form submission',()=>{
    const wrapper=shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test('render change for description form value change',()=>{
    const wrapper=shallow(<ExpenseForm/>)
    wrapper.find('input').at(0).simulate('change',{
        target:{value:'New Description'}
    })
    expect(wrapper.state('description')).toBe('New Description')
    
})

test('set note on textarea change',()=>{
    const wrapper=shallow(<ExpenseForm/>)
    wrapper.find('textarea').simulate('change',{
        target:{value:'New note'}
    })
    expect(wrapper.state('note')).toBe('New note')
    
})

test('call onSubmit prop for valid submission',()=>{
    const onSubmitSpy=jest.fn()
    const wrapper=shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:'Gum',
        note:'',
        amount:195,
        createdAt:0
    })
})

// test('should set new date on date change',()=>{
//     const now=moment()
//     const wrapper=shallow(<ExpenseForm/>)
//     wrapper.find('SingleDatePicker').prop('onDateChange')(now)
//     expect(wrapper.state('createdAt')).toEqual(now)
// })

// test('should set calendarFocused on change',()=>{
//     const now=true
//     const wrapper=shallow(<ExpenseForm/>)
//     wrapper.find('SingleDatePicker').prop('onFocusChange')({focused:now})
//     expect(wrapper.state('calendarFocused')).toBe(now)
// })