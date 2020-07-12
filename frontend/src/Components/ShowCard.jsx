import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ShowsCard = ({ show_img, title, genre, id }) => {
    const [watchers, setWatchers] =useState([])

    useEffect(() =>{
        const getWatchers = async()=>{
            try{
                let {data} = await axios.get(`/shows/watchers/${id}`)
                console.log(data.payload)
                setWatchers(data.payload)
            } catch(error){
                console.log('err:', error)
            }
        }
        getWatchers()
    }, [id])
    console.log('oop', watchers)

    const displayWatchers = watchers.map(el=>
        JSON.parse(JSON.stringify(el.username)))
        console.log(displayWatchers)
    const displayUsername = displayWatchers.join(', ')
    return (
        <div className='shows-card'>
            <img src={show_img} alt='show-poster' />
            <div className='shows-card-text'>
             <Link to={`/shows/${id}`}><h2>{title}</h2></Link>   
                <p>{genre}</p>
    <span style={{fontWeight:'bold'}}>Being watched by: </span>{displayUsername}
            </div>

        </div>
    )
}

export default ShowsCard