import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const WatchShow = () => {
    const [comments, setComments] = useState([])
    const [currentShow, setCurrentShow] = useState({})
    const [newComment, setNewComment] = useState('')
    const { show_id } = useParams()

    useEffect(() => {
        const getSelectedShow = async () => {
            try {
                let { data } = await axios.get(`/shows/${show_id}`)
                setCurrentShow(data.payload[0])
            } catch (error) {
                console.log('error', error)
            }
        }
        getSelectedShow()
    }, [show_id])

    useEffect(() => {
        const getShowComments = async () => {
            try {
                let { data } = await axios.get(`/comments/show/${show_id}`)
                setComments(data.payload)
            } catch (error) {
                console.log('err:', error)
            }
        }
        getShowComments()
    }, [])

    console.log('comments', comments)

    const showComments = comments.map(el =>
        <div>
            <p style={{ fontWeight: 'bold' }}>{el.username}</p>
            <p>{el.comment_body}</p>
        </div>
    )

    const postComment = async() => {
        let comment = {
            comment_body: newComment, 
            user_id: 3, 
            show_id: show_id
        }
        try {
            let newComment = await axios.post('/comments', comment)
            console.log('posting:', newComment)
        } catch (error) {
            console.log('err:', error)
        }
    }

    return (
        <div>
            <div>
                <h2>{currentShow.title}</h2>
                <img src={currentShow.img_url} alt='poster' />
                <p>{currentShow.genre_name}</p>
            </div>

            <div><p>Watched by:</p></div>

            <form onSubmit={postComment}>
                <input type='text' placeholder='comment' onChange={e => setNewComment(e.target.value)} /> <button>Add</button>
            </form>
            {showComments}
        </div>
    )
}

export default WatchShow