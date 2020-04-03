import React from 'react'
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom'


const Header=()=>{
    return(
        <header>
            <h1>Bling</h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
            <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </header>
    )
}

export default Header