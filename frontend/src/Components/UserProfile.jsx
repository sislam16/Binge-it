import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
                let { data } = await axios.get(`/api/users/${user_id}`)
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
                let { data } = await axios.get(`/api/shows/user/${user_id}`)
                console.log(data.payload)
                setShowList(data.payload)
            } catch (error) {
                console.log('error:', error)
            }
        }
        showByUser()
    }, [user_id])

    const showCards = showList.map(el =>
        <div className='usr-shows-list'>
          <Link to={`/shows/${el.id}`}><h3>{el.title}</h3></Link>
            <img src={el.img_url} alt='show-img' />
            <p>{el.genre_name}</p>
        </div>)

    return (
        <div >
            <div classname='usr-info'>
            <h2 style={{fontSize:'40px', fontWeight:'bolder'}}>{userInfo.username} Profile</h2>
            <img src={userInfo.avatar_url} alt='user-img' className='usr-avatar'/>
            </div>
            <h3 style={{fontWeight:'bolder', fontSize:'24px'}}>Watching</h3>
            <div className='usr-shows-container'>
                {showCards}
            </div>
        </div>
    )
}

export default UserProfile