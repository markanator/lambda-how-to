import React, { useState } from 'react';
import { axiosWithAuth } from '../../Axios/axiosWithAuth';
import { useHistory } from 'react-router-dom';


const initialList = {
    title: '',
    body: '',
    category: '',
    id: '',
}

const EditGuide = () => {
  
  const [edit, setEdit] = useState(initialList);
  const history = useHistory();
  
  const editChangeHandler = e => {
    setEdit({
        ...edit,
        [e.target.name]: e.target.value
    })
}


  const editHowTo = e => {
    e.preventDefualt();
    axiosWithAuth()
    .put(`/edit/${id}`, edit)
    .then(res => {
        console.log('res', res)
        history.push(`/profile`)
       
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
        value={edit.title}
        type="text"
        name="title"
        label="Title"
        />
        <div className='edit' />
        <TextField className='text'
        id="outlined-basic"
        onChange={editChangeHandler}
        value={edit.body}
        type="text"
        name="body"
        label="Body"
        />
        <div className='edit' />
        <TextField className='text'
        id="outlined-basic"
        onChange={editChangeHandler}
        value={edit.category}
        type="text"
        name="category"
        label="Category"
        />
        <div className='edit' />
        <Button variant="contained" color="primary" type="submit">Add</Button>             
      </form>
    </div> 
 )
}
export default EditGuide;
