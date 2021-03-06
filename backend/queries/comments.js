const db = require('../database/db')

const getCommentsByShow = async(show_id) =>{
return await db.any(`SELECT comment_body, username FROM comments JOIN users ON comments.user_id = users.id WHERE show_id =$1;`, [show_id]) 
}

const postComment = async(comment_body, user_id, show_id) =>{
    const insertQuery = `INSERT INTO comments(comment_body, user_id, show_id)VALUES($1, $2, $3) RETURNING *;`
    return await db.one(insertQuery, [comment_body, user_id, show_id])
}

const getCommentById = async(id) =>{
return await db.one(`SELECT comments.id, comment_body, username FROM comments JOIN users ON comments.user_id = users.id WHERE comments.id =$1;`, id)
}
module.exports = {
    getCommentsByShow, 
    postComment,
    getCommentById
}