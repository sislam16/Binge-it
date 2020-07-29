import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AddShow = () => {
    const [allShows, setAllShows] = useState([])
    const [selectedOption, setSelectedOption] = useState(0)
    const [showUrl, setShowUrl] = useState('')
    const [showGenre, setShowGenre] = useState(0)
    const [newShowTitle, setNewShowTitle] = useState('')
    const [allGenres, setAllGenres] = useState([])

    useEffect(() => {
        const getAllShows = async () => {
            try {
                let { data } = await axios.get('/api/shows')
                setAllShows(data.payload)                
                console.log('shows', data.payload)
            } catch (error) {
                console.log('error:', error)
            }
        }
        getAllShows()
    }, [])

    useEffect(() => {
        const getAllGenres = async () => {
            try {
                let { data } = await axios.get('/api/genres')
                setAllGenres(data.payload)
                console.log('genres', data)
            } catch (error) {
                console.log('error', error)
            }
        }
        getAllGenres()
    }, [])

    const showOptions = allShows.map(el => {
        return (
            <option value={el.id}>{el.title}</option>
        )
    })

    const genreOptions = allGenres.map(el => {
        return (
            <option value={el.id}>{el.genre_name}</option>
        )
    })

    const addShowToList = async (e) =>{
        e.preventDefault()
        const newToUserList = {
            show_id: selectedOption, 
            user_id: 3
        }
        if(selectedOption !==0){
        try{
            let addShow = await axios.post(`/api/shows/users`, newToUserList)
            console.log(addShow)
        }catch(error){
            console.log('err:', error)
        }
    } 
    }

    const createNewShow = async (e) => {
        e.preventDefault()

        const newShow = {
            title: newShowTitle,
            img_url: showUrl,
            user_id: 1,
            genre_id: showGenre
        }
        try {
            let postNewShow = await axios.post('/api/shows', newShow)
            console.log(postNewShow)
        } catch (error) {
            console.log('error', error)
        }
    }

    const updateShowOption = (e) => {
        setSelectedOption(e.target.value)
    }

    const selectGenre = (e) => {
        setShowGenre(e.target.value)
    }


    return (
        <div>
            <h1 style={{fontWeight:'bolder', fontSize:'40px'}}>Add Show</h1>
            <form className='existing' onSubmit={addShowToList}>
                <h3>Start Watching Show</h3>
                <select onChange={updateShowOption} value={selectedOption}>
                    <option>---All Shows---</option>
                    {showOptions}
                </select><br />
                <button >Start Watching</button><br />
            </form>

            <form className='addNew' onSubmit={createNewShow}>
                <h3>Or add a new Show</h3>
                <label>Show Image URL</label><br />
                <input type="text" placeholder='url' value={showUrl} onChange={e => setShowUrl(e.target.value)} /> <br />
                <label> Show Name</label><br />
                <input type="text" placeholder='Name' value={newShowTitle} onChange={e => setNewShowTitle(e.target.value)} /><br />
                <label>Genre</label> <br />
                <select onChange={selectGenre} value={showGenre}>
                    <option>---Select a Genre---</option>
                    {genreOptions}
                </select><br />
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddShow