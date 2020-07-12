import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ShowsCard from './ShowCard'
import { Link, useParams } from 'react-router-dom'

const UserProfile = () => {
    const [userInfo, setUserInfo] = useState([])
    const [showList, setShowList] = useState([])
    // const {id} = useParams()
    const { user_id } = useParams()

    console.log('id in the front', user_id)

    useEffect(() => {
        const currentUser = async () => {
            try {
                let { data } = await axios.get(`/users/${user_id}`)
                setUserInfo(data.payload)
            } catch (error) {
                console.log('error', error)
            }
        }
        currentUser()
    }, [user_id])

    useEffect(() => {
        const showByUser = async () => {
            try {
                let { data } = await axios.get(`/shows/user/${user_id}`)
                setShowList(data.payload)
            } catch (error) {
                console.log('error:', error)
            }
        }
        showByUser()
    }, [user_id])

    const showCards = showList.map(el =>
        <div>
            <h3>{el.title}</h3>
            <img src={el.img_url} />
            <p>{el.genre_name}</p>
        </div>)

    console.log('showList:', showList)
    return (
        <div >
            <div classname='usr-info' style={{ display: 'flex', flexDirection: 'row' }}>
                <img src={userInfo.avatar_url} alt='user-img' />
                <h2>{userInfo.username} Profile</h2>
            </div>

            <div className='usr-shows'>
                <h3>Watching</h3>
                {showCards}
            </div>
        </div>
    )
}

export default UserProfile