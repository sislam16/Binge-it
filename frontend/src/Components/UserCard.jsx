import React from 'react'
import {Link} from 'react-router-dom'
import UserProfile from './UserProfile'

const UserCard = ({ img, name, id }) => {
    return (
        <div className='user-card' id={id} style={{display:'flex', flexDirection:'row',justifyContent:'center', marginBottom:'5%'}}>
            <img src={img}  style={{height:'100px'}}/>
            <Link to={`/users/${id}`}> <h2>{name}</h2></Link>
        </div>
        
    )
}

export default UserCard