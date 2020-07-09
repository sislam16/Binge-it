import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ShowsCard from './ShowCard'

const Shows = () => {
    const [allShows, setAllShows] = useState([])

    useEffect(() => {
        const getAllShows = async () => {
            try {
                let { data } = await axios.get('/shows')
                setAllShows(data.payload)
                console.log('shows', data.payload)
            } catch (error) {
                console.log('error', error)
            }
        }
        getAllShows()
    }, [])

    const showsThumbnails = allShows.map(el=>
        <ShowsCard
        id={el.id}
        title={el.title}
        show_img={el.img_url}
        genre={el.genre_name}
        />)

    return (
        <div>
            <h1>Shows</h1>
            {showsThumbnails}
        </div>
    )
}

export default Shows