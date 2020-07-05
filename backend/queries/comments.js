const db = require('../database/db')

const getCommentsByShow = async(show_id) =>{
const show_id=req.param.show_id
return await db.any(`SELECT * FROM comments WHERE show_id =$1`, show_id)
}

const postComment = async(comment_body, user_id, show_id) =>{
    const insertQuery = `INSERT INTO comments(comment_body, user_id, show_id)VALUES($1, $2, $3) RETURNING *;`
    return await db.one(insertQuery, [comment_body, user_id, show_id])
}

module.exports ={
    getCommentsByShow, 
    postComment
}