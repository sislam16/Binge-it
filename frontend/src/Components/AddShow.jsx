import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AddShow = () => {

    return (
        <div>
            <h1>Add Show</h1>
            <form className='existing'>
                <h3>Start Watching Show</h3>
                <select></select><br />
                <button>Start Watching</button><br />
            </form>

            <form className='addNew'>
                <h3>Or add a new Show</h3>
                <label>Show Image URL</label><br />
                <input type="text" placeholder='url' /> <br />
                <label> Show Name</label><br />
                <input type="text" placeholder='Name' /><br />
                <label>Genre</label> <br />
                <select name="" id=""></select><br />
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddShow