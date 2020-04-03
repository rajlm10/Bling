import React from 'react'
import {connect} from 'react-redux'
import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from '../actions/filters'
import {DateRangePicker} from 'react-dates'


class ExpenseListFilters extends React.Component{
    state={
        calendarFocused:null
    }
    onDatesChange=({startDate,endDate})=>{
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange=(calendarFocused)=>{
        this.setState(()=>{
            return{
                calendarFocused
            }
        })
    }
    render(){
        return(
            <div>
                <input type="text" value={this.props.filters.text} onChange={
                    (e)=>{
                        this.props.dispatch(setTextFilter(e.target.value))
                    }
                }/>
                <select value={this.props.filters.sortBy} onChange={
                    (e)=>{
                        if (e.target.value==='date') {
                            this.props.dispatch(sortByDate())
                        }
    
                        else if(e.target.value==='amount'){
                            this.props.dispatch(sortByAmount())
                        }
                        
                    }
                }>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                startDate={this.props.filters.startDate}
                startDateId="start"
                endDateId="end"
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={()=>false}
                showClearDates={true}
                
                />
    
            </div>
        )
    }
}



const mapStateToProps=(state)=>{
    return{
        filters:state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)