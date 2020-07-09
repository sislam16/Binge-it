import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const UserProfile = () => {
    const [userInfo, setUserInfo] = useState([])
    const { id } = useParams()
    console.log('id in the front', id)

    useEffect(() => {
        const currentUser = async () => {
            try {
                let { data } = await axios.get(`/users/${id}`)
                setUserInfo(data.payload)
            } catch (error) {
                console.log('error', error)
            }
        }
        currentUser()
    }, [id])

    console.log('usr:', userInfo)

    return (
        <div>
            <h2>{userInfo.username} Profile</h2>
            <div className='usr-shows'>
                
            </div>
        </div>
    )
}

export default UserProfile