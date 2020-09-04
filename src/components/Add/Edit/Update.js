import React, { useState } from 'react';
import { axiosWithAuth } from '../../../Axios/axiosWithAuth';


const initialList = {
    title: '',
    body: '',
    category: '',
    date: Date.now(),
    id: '',

}

const EditGuide = () => {
  
  const [edit, setEdit] = useState(initialList);
  
  
  const editChangeHandler = e => {
    setEdit({
        ...edit,
        [e.target.name]: e.target.value
    })
}


  const editHowTo = e => {
    e.preventDefualt();
    axiosWithAuth()
    .put(``, edit)
    .then(() => {
      axiosWithAuth()
      .get(``)
      .then(res => setAdd(res.data))
      .catch(err => console.log(err))  
    })
    .catch(err => console.log(err))
 }

 return (
    <div>
      <h2>Update Your Guides</h2>    
      <form onSubmit={editHowTo}>
        <div className='edit' />  
        <TextField className='text'
        id="outlined-basic"
        onChange={editChangeHandler}
        value={edit.firstname}
        type="text"
        name="title"
        label="Title"
        />
        <div className='edit' />
        <TextField className='text'
        id="outlined-basic"
        onChange={editChangeHandler}
        value={edit.firstname}
        type="text"
        name="body"
        label="Body"
        />
        <div className='edit' />
        <TextField className='text'
        id="outlined-basic"
        onChange={editChangeHandler}
        value={edit.firstname}
        type="text"
        name="category"
        label="Category"
        />
        <div className='edit' />
        <TextField className='text'
        id="outlined-basic"
        onChange={editChangeHandler}
        value={edit.firstname}
        type="date"
        name="date"
        />
        <div className='edit' />
        <Button variant="contained" color="primary" type="submit">Add</Button>             
      </form>
    </div> 
 )
}
export default EditGuide;