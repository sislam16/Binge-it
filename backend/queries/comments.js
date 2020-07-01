const db = require('../database/db')

const getCommentsByShow = async() =>{

}

const postComment = async(comment_body, user_id, show_id) =>{
    const insertQuery = `INSERT INTO comments(comment_body, user_id, show_id)VALUES($1, $2, $3) RETURNING *;`
}

module.exports ={
    getCommentsByShow, 
    postComment
}