import React, { useState } from 'react';
import { axiosWithAuth } from '../../../Axios/axiosWithAuth';


const initialList = {
    title: '',
    body: '',
    category: '',
    date: Date.now(),
    id: '',

}

const AddGuide = () => {
   
   const [add, setAdd] = useState(initialList);
   
   const changeHandler = e => {
       setAdd({
           ...add,
           [e.target.name]: e.target.value
       })
   }

   const addHowTo = e => {
      e.preventDefualt();
      axiosWithAuth()
      .post(``, add)
      .then(() => {
        axiosWithAuth()
        .get(``)
        .then(res => setAdd(res.data))
        .catch(err => console.log(err))  
      })
      .catch(err => console.log(err))
   }

   return(
    <div>
      <form>
        <TextField className='text'
        id="outlined-basic"
        onChange={changeHandler}
        value={user.firstname}
        type="text"
        name="title"
        label="Title"
        variant="outlined"
        />
        <TextField className='text'
        id="outlined-basic"
        onChange={changeHandler}
        value={user.firstname}
        type="text"
        name="body"
        label="Body"
        variant="outlined"
        />
        <TextField className='text'
        id="outlined-basic"
        onChange={changeHandler}
        value={user.firstname}
        type="text"
        name="category"
        label="Category"
        variant="outlined"
        />
        <TextField className='text'
        id="outlined-basic"
        onChange={changeHandler}
        value={user.firstname}
        type="text"
        name="date"
        label="Date"
        variant="outlined"
        />             
      </form>  
    </div>
   )
}

export default AddGuide;