import {createStore} from 'redux'

const incrementCount=({incrementBy=5}={})=>{
    return{
        type:'INCREMENT',
        incrementBy
    }
}

const decrementCount=()=>{
    return{
        type:'DECREMENT'
    }
}

const resetCount=()=>{
    return{
        type:'RESET'
    }
}

const store=createStore((state={count:10},action)=>{
    switch (action.type) {
        case 'INCREMENT':
            
            return{
                count:state.count+action.incrementBy
            }
        
        case 'DECREMENT':
            return{
                count:state.count-1
            }

        case 'RESET':
            return {
                count: 0
            }
            
    
        default:
            return state
    }

})

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(incrementCount({incrementBy:5}))

store.dispatch(decrementCount())

store.dispatch(resetCount())


