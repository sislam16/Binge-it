const express = require('express');
const router = express.Router();
const genreQueries = require('../queries/genres')

router.get('/', async(req, res, next) =>{
    console.log('genres')
    try{
        let allGenres = await genreQueries.getAllGenres()
        res.json({
            payload: allGenres, 
            message: 'Success. All genres retrieved'
        })
    } catch(error){
        res.status(500).json({
            payload: null, 
            message: 'Error. Unable to retrieve genres.'
        })
    }
})

router.post('/', async(req, res, next) =>{
    console.log('post genre')
    try{
        let newGenre = await genreQueries.createGenre()
        res.json({
            payload: newGenre,
            message: `New genre, ${newGenre}, has been created`
        })
    } catch(error){
        res.status(500).json({
            payload: null, 
            message: 'Error. Unable to create genre.'
        })
    }
})
module.exports = router;