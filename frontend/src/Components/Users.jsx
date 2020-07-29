import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserCard from './UserCard'

const Users = () => {
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        const getAllUsers = async () => {
            try {
                let { data } = await axios.get('/api/users')
                console.log(data.payload)
                setAllUsers(data.payload)
            } catch (error) {
                console.log(error)
            }
        }
        getAllUsers()
    }, [])
    console.log('all users', allUsers)

    const usersThumbnail = allUsers.map(el =>
        <UserCard
        id={el.id}
        img={el.avatar_url}
        name={el.username}
        />)

    return (
        <div>
            <h1 style={{fontWeight:'bolder', fontSize:'40px'}}>Users</h1>
            <div className='users-container'>
            {usersThumbnail}
            </div>
        </div>
    )

}

export default Users