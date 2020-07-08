import React from 'react'
import { Link } from 'react-router-dom'

const ShowsCard = ({ show_img, title, genre }) => {
    return (
        <div className='shows-card'>
            <img src={show_img} />
            <div className='shows-card-text'>
                <h2>{title}</h2>
                <p>{genre}</p>
            </div>

        </div>
    )
}

export default ShowsCard