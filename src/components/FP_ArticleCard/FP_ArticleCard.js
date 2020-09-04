import React,{useEffect,useState}    from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Card, CardImg, CardText} from 'reactstrap';
import './FP_ArticleCard.css'

// PROPS from FRONTPAGECONTENT.JS
export default function FP_ArticleCard({data}) {
    const [username,setUsername] = useState("");
    // need: imgUrl,author,title,category
    // Wouldn't require if we received a string instead of a number 🤷‍♂️
    useEffect(()=>{
        // add ability to cancel promise call
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        const fetchName = ()=>{
            try{
                axios.get(`https://how-tos-bw.herokuapp.com/users/${data.user_id}`,{CancelToken: source.token})
            .then((resp)=>{
                // console.log("FP ARTICLE ",data.user_id,resp);
                setUsername(`${resp.data.username}`);
            }
            )
            }catch(error) {
                if (axios.isCancel(error)){
                    console.log("cancelled");
                } else {
                    throw error;
                }
            }
        }

        fetchName();
        // cleanup
        return () => {
            source.cancel();
        }
    },[data])

    // Function to display proper category name
    const catName = (num)=>{
        if(num ===1){
            return "Outdoors";
        } else if (num ===2){
            return "Tech";
        } else if(num === 3){
            return "Cooking";
        } else {
            return "Crafts";
        }
    }

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
    // future use: take in prop data for img/title/author
    <div className='article-card-main'>
        
        <Card className='card-item'>
        <Link to={`/posts/${data.id}`}>
                <CardImg
                className='card-img'
                width='300px'
                height='250px'
                top
                src={CatImg(data.category_id)}
                alt="guide showcase"
                />
                <div className='card-body-group'>
                    <CardText><strong>{data.title} </strong><br/>by: {username} in: {catName(data.category_id)}</CardText>
                </div>
            </Link>
        </Card>
    </div>
    );
}