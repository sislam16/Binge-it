import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AddShow = () => {
    const [allShows, setAllShows] = useState([])
    const [newShow, setNewShow] = useState({})
    const [allGenres, setAllGenres] = useState([])

    useEffect(() => {
        const getAllShows = async () => {
            try {
                let { data } = await axios.get('/shows')
                setAllShows(data.payload)
                console.log('shows', data)
            } catch (error) {
                console.log('error:', error)
            }
        }
        getAllShows()
    }, [])

    useEffect(() => {
        const getAllGenres = async () => {
            try {
                let { data } = await axios.get('/genres')
                setAllGenres(data.payload)
                console.log('genres', data)
            } catch (error) {
                console.log('error', error)
            }
        }
        getAllGenres()
    }, [])

    const showOptions = allShows.map(el =>
        <option>{el.title}</option>
    )
    
    const genreOptions = allGenres.map(el=>
        <option>{el.genre_name}</option>)

    return (
        <div>
            <h1>Add Show</h1>
            <form className='existing'>
                <h3>Start Watching Show</h3>
                <select>
                    <option>---All Shows---</option>
                    {showOptions}
                </select><br />
                <button>Start Watching</button><br />
            </form>

            <form className='addNew'>
                <h3>Or add a new Show</h3>
                <label>Show Image URL</label><br />
                <input type="text" placeholder='url' /> <br />
                <label> Show Name</label><br />
                <input type="text" placeholder='Name' /><br />
                <label>Genre</label> <br />
                <select>
                    <option>---Select a Genre---</option>
                    {genreOptions}
                    </select><br />
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddShow