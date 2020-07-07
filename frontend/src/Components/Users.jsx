import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Users = () =>{
    const [allUsers, setAllUsers] = useState([])

    const getAllUsers = async () =>{
        try{
            let {data} = await axios.get('/users')
            console.log(data)
        }catch(error){
            console.log(error)
        }
    }
    return(
        <div>
            <h1>Users</h1>
        </div>
    )

}

export default Users