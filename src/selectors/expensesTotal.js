const getExpensesTotal=(expenses)=>{
    let total=0
    let i=0
    for(i=0;i<expenses.length;i++)
    {
        total+=expenses[i].amount
    }
    return total
}


export default getExpensesTotal