const db = require('../database/db')

const getAllShows = async()=>{
    return await db.any(`SELECT * FROM shows;`)
}

const getShowsById = async(id) =>{
    return await db.one(`SELECT * FROM shows WHERE id=$1;`)
}

const createShow = async(title, img_url, user_id, genre_id) =>{
    const insertQuery = `INSERT INTO shows(title, img_url, user_id, genre_id)
    VALUES($1, $2, $3, $4)
    RETURNING *`
    return await db.one(insertQuery, [title, img_url, user_id, genre_id])
}



module.exports = {
    getAllShows, 
    getShowsById, 
    createShow
}