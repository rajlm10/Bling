//SET_TEXT
export const setTextFilter=(text='')=>{
    return{
        type:'SET_TEXT',
        text
    }
}

//SORT BY DATE
export const sortByDate=()=>{
    return{
        type:'SORT_BY_DATE'
    }
}

//SORT BY Amount
export const sortByAmount=()=>{
    return{
        type:'SORT_BY_AMOUNT'
    }
}


//SET_START_DATE

export const setStartDate=(date=undefined)=>{
    return{
        type:'SET_START_DATE',
        date
    }
}

//SET_END_DATE

export const setEndDate=(date=undefined)=>{
    return{
        type:'SET_END_DATE',
        date
    }
}
