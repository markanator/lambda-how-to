import React, {useState} from 'react';
import {axiosWithAuth} from '../../Axios/axiosWithAuth';
import {useParams, useHistory} from 'react-router-dom';

const initialList = {
    title: '',
    body: '',
    category: '',
    id: ''
}

const AddGuide = () => {

    const [add,
        setAdd] = useState(initialList);
    const id = useParams
    const history = useHistory

    const changeHandler = e => {
        setAdd({
            ...add,
            [e.target.name]: e.target.value
        })
    }

    const addHowTo = e => {
        e.preventDefualt();
        axiosWithAuth()
            .post(`/post`, add)
            .then((res) => {
                console.log('res', res)
                history.push(`/profile`)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form>
                <TextField
                    className='text'
                    id="outlined-basic"
                    onChange={changeHandler}
                    value={add.title}
                    type="text"
                    name="title"
                    label="Title"/>
                <TextField
                    className='text'
                    id="outlined-basic"
                    onChange={changeHandler}
                    value={add.body}
                    type="text"
                    name="body"
                    label="Body"/>
                <TextField
                    className='text'
                    id="outlined-basic"
                    onChange={changeHandler}
                    value={add.category}
                    type="text"
                    name="category"
                    label="Category"/>
            </form>
        </div>
    )
}

export default AddGuide;
