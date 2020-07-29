import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ShowsCard = ({ show_img, title, genre, id }) => {
    const [watchers, setWatchers] = useState([])

    useEffect(() => {
        const getWatchers = async () => {
            try {
                let { data } = await axios.get(`/api/shows/watchers/${id}`)
                console.log(data.payload)
                setWatchers(data.payload)
            } catch (error) {
                console.log('err:', error)
            }
        }
        getWatchers()
    }, [id])

    const displayWatchers = watchers.map(el =>
        JSON.parse(JSON.stringify(el.username)))
    const displayUsername = displayWatchers.join(', ')

    return (
        <div className='shows-card'>
            <img src={show_img} alt='show-poster' className='shows-poster' />
            <div className='shows-card-text'>
                <Link to={`/shows/${id}`}><h3>{title}</h3></Link>
                <p>{genre}</p>
                <span style={{ fontWeight: 'bold' }}>Being watched by: </span>{displayUsername}
            </div>

        </div>
    )
}

export default ShowsCard