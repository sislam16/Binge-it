const db = require('../database/db')

const getAllShows = async () => {
    return await db.any(`SELECT shows.id, title, img_url, genre_name FROM shows JOIN genres ON shows.genre_id=genres.id;`)
}

const getShowsById = async (id) => {
    return await db.one(`SELECT * FROM shows WHERE id=$1;`, id)
}

const createShow = async (title, img_url, genre_id) => {
    const insertQuery = `INSERT INTO shows(title, img_url, genre_id)
    VALUES($1, $2, $3);`
    console.log(insertQuery)
    return await db.none(insertQuery, [title, img_url,  genre_id])
}

const showsByGenre = async (genre_id) => {
    return await db.one(`SELECT * FROM shows WHERE genre_id=$1;`, genre_id)
}

const showsByUser = async (user_id) => {
    return await db.any(`SELECT shows.id, title, img_url, genre_id, user_id, username, avatar_url 
    FROM shows 
    JOIN shows_users 
    ON shows.id = shows_users.show_id 
    JOIN users ON shows_users.user_id = users.id 
    WHERE user_id = $1 
    GROUP BY shows.id, shows_users.user_id, users.username, users.avatar_url`)
}

module.exports = {
    getAllShows,
    getShowsById,
    createShow
}