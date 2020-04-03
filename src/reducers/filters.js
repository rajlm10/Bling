//Filters reducer
import moment from 'moment'

const filtersDefaultState={
    text:'',
    sortBy:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
}

const filtersReducer=(state=filtersDefaultState,action)=>{

    switch (action.type) {
        case 'SET_TEXT':
            return {
                ...state,
                text:action.text
                
            }
         
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy:'date'
            }
        
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy:'amount'
            }

        case 'SET_START_DATE':
            return{
                ...state,
                startDate:action.date
            }

        case 'SET_END_DATE':
            return{
                ...state,
                endDate:action.date
            }
            
        default:
            return state
    }
}

export default filtersReducer