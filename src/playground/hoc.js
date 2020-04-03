//HOC-A componenet that renders another component
//Reuse code
//Render hijacking
//Prop manipulation
//Abstrcat state

import React from 'react';
import ReactDOM from 'react-dom'

const Info=(props)=>{
    return(
        <div>
            <h1>Info</h1>
            <p>{props.info}</p>
        </div>
    )
}

const admin=(WrappedComponent)=>{
    return (props)=>
        (
            <div>
            {props.isAdmin&&<p>This is private</p>}
            <WrappedComponent {...props}/>
            </div>
        )
    
}

const requireAuth=(WrappedComponent)=>{
    return (props)=>(
        <div>
        {props.isAuthenticated?<WrappedComponent {...props}/>:<p>Please authenticate</p>}
        </div>
    )
}

const AdminInfo=admin(Info)
const AuthInfo=requireAuth(Info)

// ReactDOM.render(<AdminInfo  isAdmin={true} info="This is the info"/>,document.getElementById('app'))
ReactDOM.render(<AuthInfo  isAuthenticated={true} info="This is the info"/>,document.getElementById('app'))
