const express = require('express');
const router = express.Router();
const commentsQueries = require('../queries/shows')

router.get('/', async(req, res, next) =>{
    try{
        let getShowComments = await commentsQueries.getCommentsByShow()
    } catch(error){
        res.status(500).json({
            payload: null, 
            message: 'Error. Unable to retrieve comments.'
        })
    })
})

module.exports = router;