import React from 'react'
import {shallow} from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem'
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

test('should render expense ',()=>{
    const wrapper=shallow(<ExpenseListItem key={expenses[0].id} expense={expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})