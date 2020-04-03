import React from 'react'
import {Link} from 'react-router-dom'

const NotFoundPage=()=>{
    return (
        <div>
            <p>This is a  404! <Link to="/">Go Home </Link></p>
        </div>
    )
}

export default NotFoundPage