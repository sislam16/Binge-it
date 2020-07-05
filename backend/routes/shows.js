const express = require('express');
const router = express.Router();
const showsQueries = require('../queries/shows')

router.get('/', async(req, res, next) =>{
    try{
        let allShows = await showsQueries.getAllShows()
        res.json({
            payload: allShows,
            message: 'Success. All shows have been retrieved.'
        })
    }catch(error){
        res.status(500).json({
            payload: null,
            message: 'Error. Unable to retrieve shows'
        })
    }
})

router.get('/:id', async(req, res, next)=>{
    const id = req.params.id
    try{
        let showById = await showsQueries.getShowsById(id)
        res.json({
            payload: showById,
            message: `Success. ${showById} has been retrieved.`
        })
    } catch(error){
        res.status(500).json({
            payload: null, 
            message: 'Error. Unable to retrieve shows.'
        })
    }
})

router.post('/', async(req, res, next)=>{
    const {title, img_url, user_id, genre_id} = req.body
    let show ={
        title, 
        img_url, 
        user_id, 
        genre_id
    }

    try{
        let newShow = await showsQueries.createShow(show)
        res.json({
            payload: newShow,
            message: 'Success. New show has been created.'
        })
    } catch(error){
        res.status(500).json({
            payload: null, 
            message: 'Error. Unable to post show.'
        })
    }
})

router.get('/genre/:genre_id', async(req, res, next)=>{
    try{
        let showsByGenre = showsQueries.showsByGenre()
        res.json({
            payload: showsByGenre,
            message: 'Success. Shows by genre have been retrieved.'
        })
    }catch(error){
        res.status(500).json({
            payload: null, 
            message: 'Error. Unable to retrieve show.'
        })
    }
})

router.get('/user/:user_id', async(req, res, next) =>{
    const user_id = res.params.user_id
    try{
        let userShows = showsQueries.showsByUser()
        res.json({
            payload: userShows, 
            message: 'Success. Shows by user have been retrieved.'
        })
    }catch(error){
        res.status(500).json({
            payload: null, 
            message: 'Error. Unable to retrieve shows by user_id.'
        })
    }
})

module.exports=router;