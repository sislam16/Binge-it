import React from 'react'
import { Link } from 'react-router-dom'

const ShowsCard = ({ show_img, title, genre, id }) => {
    return (
        <div className='shows-card'>
            <img src={show_img} />
            <div className='shows-card-text'>
             <Link to={`/shows/${id}`}><h2>{title}</h2></Link>   
                <p>{genre}</p>
            </div>

        </div>
    )
}

export default ShowsCard