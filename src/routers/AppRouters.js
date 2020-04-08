import React from 'react'
import {Router,Route,Switch,Link,NavLink} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import LoginPage from '../components/LoginPage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import NotFoundPage from '../components/NotFoundPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute  from './PublicRoute'

export const history=createHistory()

const AppRouter=()=>{
    return(
        <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}  />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
                <Route  component={NotFoundPage}/>  {/*no path=always a match */}
            </Switch>
        </div>
        </Router>
    )
}

export default AppRouter