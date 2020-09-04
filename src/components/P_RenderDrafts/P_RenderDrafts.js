import React, {useState}                    from 'react';
import {Card, CardImg, CardTitle, Button}   from 'reactstrap';
import {axiosWithAuth}                      from '../../Axios/axiosWithAuth';
import {Link}                               from 'react-router-dom';
import './RenderDrafts.css';

export default function P_RenderDrafts({data}) {
    // mouse over toggle for edit button on card
    const [editToggle,
        setEditToggle] = useState(true);

    function CatImg(num){
        if(num ===1){
            return 'https://i.imgur.com/wUem9kF.jpg';
        } else if (num ===2){
            return 'https://i.imgur.com/IaD7iOc.jpg';
        } else if(num === 3){
            return 'https://i.imgur.com/9JEgyD4.jpg';
        } else {
            return 'https://i.imgur.com/1T5VgLu.jpg';
        }
    }
    
    return (
        <div className='article-card-main card-group'>
            
            <Card
                className='card-item card'
                onMouseOver={(e) => {
                setEditToggle(false);
            }}
                onMouseLeave={e => {
                setEditToggle(true);
            }}>
                <Link to={`/posts/${data.id}`}>
                    <CardImg
                        className='thumbnail-image card-image'
                        top
                        src={CatImg(data.category_id)}
                        alt="guide showcase"/>
                    {/* When clicked, will send user to edit this POST based OFF ID */}
                {/* EDIT button */}
                <Button
                    tag={Link}
                    color='info'
                    className='edit-btn Link'
                    to={`/posts/${data.id}/edit`}
                    hidden={editToggle}
                    >EDIT</Button>
                {/* Delete post button */}
                <Button
                    tag={Link}
                    color='danger'
                    className='delete-btn Link'
                    hidden={editToggle}
                    to='/'
                    onClick={e=>{
                        console.log('user wants to delete post: ', data.id)
                        axiosWithAuth()
                        .delete(`/posts/${data.id}`)
                        .then(res => {
                            console.log('DELTED!', res);
                            window.localStorage.getItem("token");
                        })
                        .catch(err => console.log(err));
                    }}
                    >Delete</Button>
                    <div className='card-body-group'>
                        <CardTitle className='title'>{data.title}</CardTitle>
                    </div>
                </Link>
            </Card>
        </div>
    );
}