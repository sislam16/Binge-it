import React from 'react'
import {Link} from 'react-router-dom'

const UserCard = ({ img, name, id }) => {
    return (
        <div className='user-card' id={id} >
            <img src={img}  style={{height:'100px'}} alt ='usr-img'/>
            <Link to={`/users/${id}`}> <h2>{name}</h2></Link>
        </div>
        
    )
}

export default UserCard