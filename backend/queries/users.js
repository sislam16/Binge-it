const db = require('../database/db')

const getAllUsers = async() =>{
    return await db.any(`SELECT * FROM users;`)
}

const getUsersById = async(id) =>{
    return await db.oneOrNone(`SELECT * FROM users WHERE id=$1;`, id)
}

const createUser = async(username, avatar_url) =>{
    const insertQuery = `
    INSERT INTO users(
        username, 
        avatar_url)
    VALUES($1, $2)
    RETURNING *`
    return await db.one(insertQuery, [username, avatar_url])
}

module.exports = {
    getAllUsers, 
    getUsersById, 
    createUser
}