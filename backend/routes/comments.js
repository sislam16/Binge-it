const express = require('express');
const router = express.Router();
const commentsQueries = require('../queries/comments')


router.get('/show/:show_id', async(req, res, next) => {
    const show_id = req.params.show_id
    try{
        let getShowComments = await commentsQueries.getCommentsByShow(show_id)
        res.json({
            payload: getShowComments,
            message: 'Success. Retrieved show comments.'
        }) 
    } catch(error){
        console.log(error)
        res.status(500).json({
            payload: null, 
            message: 'Error. Unable to retrieve comments.'
        })
    }
})

router.post('/', async(req, res, next) =>{
    const {comment_body, user_id, show_id} = req.body
   
    try{
        let newComment = await commentsQueries.postComment(comment_body, user_id, show_id)
        let commentWithUsername = await commentsQueries.getCommentById(newComment.id)
        
        res.json({
            payload: commentWithUsername, 
            message: 'Success. Comment has been posted.'
        })

    } catch(error){
        res.status(500).json({
            payload: null, 
            message: 'Error. Unable to post comment.'
        })
    }
})
module.exports = router;