import React from 'react'
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {startLogout} from '../actions/auth'

const Header=(props)=>{
    return(
        <header className="header">
            <div className="content-container">
                <div className="header__content">
                    <Link to="/dashboard" className="header__title"><h1>Bling</h1></Link>
                    <button onClick={props.startLogout} className="button button--link">Logout</button>
                </div>
            </div>
        </header>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        startLogout: ()=>dispatch(startLogout())
    }
}

export default connect(undefined,mapDispatchToProps)(Header)