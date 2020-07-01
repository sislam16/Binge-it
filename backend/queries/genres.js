const db = require('../database/db')

const getAllGenres = async () =>{
    return await db.any(`SELECT * FROM genres;`)
}

const createGenre = async(genre_name)=>{
    const insertQuery = `INSERT INTO genres(genre_name) 
    VALUES($1) 
    RETURNING *;`

    return await db.one(insertQuery,[genre_name])
}

module.exports = {
    getAllGenres,
    createGenre
}