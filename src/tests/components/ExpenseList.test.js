import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseList} from '../../components/ExpenseList'
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

test('should render expense list with expenses',()=>{
    const wrapper=shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render message  with no expenses',()=>{
    const wrapper=shallow(<ExpenseList expenses={[]}/>)
    expect(wrapper).toMatchSnapshot()
})