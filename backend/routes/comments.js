const express = require('express');
const router = express.Router();
const commentsQueries = require('../queries/shows')

router.get('/', async(req, res, next) => {
    try{
        let getShowComments = await commentsQueries.getCommentsByShow()
        res.json({
            payload: getShowComments,
            message: 'Success. Retrieved show comments.'
        })
    } catch(error){
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
        res.json({
            payload: newComment, 
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