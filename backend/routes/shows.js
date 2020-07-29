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
    const {title, img_url, genre_id} = req.body
   
    try{
        let newShow = await showsQueries.createShow(title, img_url, genre_id)
        res.json({
            payload: newShow,
            message: 'Success. New show has been created.'
        })
    } catch(error){
        console.log('err:', error)
        res.status(500).json({
            payload: null, 
            message: 'Error. Unable to post show.'
        })
    }
})

router.post('/users', async(req, res, next)=>{
    const {user_id, show_id} = req.body
    try{
        let addShowToList = await showsQueries.addShowToUsers(show_id, user_id)
        res.json({
            payload: addShowToList, 
            message: 'Success. Show has been added to user page.'
        })
    }catch(error){
        console.log('err:', error)
        res.status(500).json({
            payload: null, 
            message: 'Error. Unable to add show to list.'
        })
    }
})

router.get('/watchers/:id', async(req,res,next)=>{
    const id=req.params.id
    try{
        let showWatchers = await showsQueries.watchersByShowId(id)
        res.json({
            payload: showWatchers,
            message: 'Success. Watchers have been retrieved.'
        })
    }catch(error){
        res.status(500).json({
            payload: null, 
            message: 'Error. Unable to retrieve watchers.'
        })
    }
})

router.get('/genre/:genre_id', async(req, res, next)=>{
    try{
        let showsByGenre = await showsQueries.showsByGenre()
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
    const user_id = req.params.user_id
    try{
        let userShows = await showsQueries.showsByUser(user_id) 
        res.json({
            payload: userShows, 
            message: 'Success. Shows by user have been retrieved.'
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            payload: null, 
            message: 'Error. Unable to retrieve shows by user_id.'
        })
    }
})

module.exports=router;