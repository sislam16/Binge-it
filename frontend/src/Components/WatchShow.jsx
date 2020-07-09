import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const WatchShow = () => {
    const [currentShow, setCurrentShow] = useState({})
    const { show_id } = useParams()

    useEffect(() => {
        const getSelectedShow = async () => {
            try {
                let { data } = await axios.get(`/shows/${show_id}`)
                setCurrentShow(data.payload)
            } catch (error) {
                console.log('error', error)
            }
        }
        getSelectedShow()
    }, [])


    return (
        <div>
            <h2>{currentShow.title}</h2>
            <img src={currentShow.img_url} alt='poster'/>
            <p></p>
        </div>
    )
}

export default WatchShow