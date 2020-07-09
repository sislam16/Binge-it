const express = require('express');
const router = express.Router();
const userQueries = require('../queries/users')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  console.log('here')
  try{
    let allUsers = await userQueries.getAllUsers()
    res.json({
      payload: allUsers, 
      message: 'Success. All users retrieved.'
    })
  } catch(error){
    res.status(500).json({
      payload:null, 
      message: 'Error. Unable to retrieve users.'
    })
  }
});

router.get('/:id', async(req, res, next)=>{
  let id = req.params.id
  console.log('id:', id)
  try{
    let userById = await userQueries.getUsersById(id)
    res.json({
      payload: userById,
      message: 'Success. User has been retrieved.'
    })
  } catch(error){
    res.status(500).json({
      payload:null, 
      message:'Error. Unable to retrieve user.'
    })
  }
})

module.exports = router;
