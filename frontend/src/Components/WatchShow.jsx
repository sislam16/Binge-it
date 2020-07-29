import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const WatchShow = () => {
    const [comments, setComments] = useState([])
    const [currentShow, setCurrentShow] = useState({})
    const [commentText, setCommentText] = useState('')
    const [allWatchers, setAllWatchers] = useState([])
    const { show_id } = useParams()

    useEffect(() => {
        const getSelectedShow = async () => {
            try {
                let { data } = await axios.get(`/api/shows/${show_id}`)
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
                let { data } = await axios.get(`/api/comments/show/${show_id}`)
                setComments(data.payload)
            } catch (error) {
                console.log('err:', error)
            }
        }
        getShowComments()
    }, [show_id])

    useEffect(() => {
        const getWatchers = async () => {
            try {
                let { data } = await axios.get(`/api/shows/watchers/${show_id}`)
                console.log(data.payload)
                setAllWatchers(data.payload)
            } catch (error) {
                console.log('err:', error)
            }
        }
        getWatchers()
    }, [show_id])


    const displayWatchers = allWatchers.map(el =>
        JSON.parse(JSON.stringify(el.username)))

    const displayUsername = displayWatchers.join(', ')

    const showComments = comments.map(el =>
        <div>
            <p style={{ fontWeight: 'bold' }}>{el.username}</p>
            <p>{el.comment_body}</p>
        </div>
    )

    const postComment = async (e) => {
        e.preventDefault()
        let comment = {
            comment_body: commentText,
            user_id: 3,
            show_id: show_id
        }
        try {
            let {data} = await axios.post('/comments', comment)
            console.log('posting:', data)
            addComment(data.payload)
        } catch (error) {
            console.log('err:', error)
        }

    }

    const addComment = (comment) => {
        let commentsCopy = [...comments]
        commentsCopy.push(comment)
        setComments(commentsCopy)
    }

    return (
        <div>
            <div>
                <h2 style={{fontWeight:'bolder', fontSize:'40px'}}>{currentShow.title}</h2>
                <img src={currentShow.img_url} alt='poster' />
                <p style={{ fontWeight: 'bold' }}>{currentShow.genre_name}</p>
            </div>

            <div><span style={{ fontWeight: 'bold' }}>Watched by: </span>{displayUsername}</div>

            <form onSubmit={postComment}>
                <input type='text' placeholder='comment' onChange={e => setCommentText(e.target.value)} value={commentText}/> <button>Add</button>
            </form>
            {showComments}
        </div>
    )
}

export default WatchShow