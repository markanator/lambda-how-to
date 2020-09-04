import React, { useEffect, useState }   from 'react';
import {useParams}                      from 'react-router-dom';
// import moment                        from 'moment';
import axios                            from 'axios';
import './Guide.css';

// This is the VIEW Guide Page
// gets PROPS from APP.JS
export default function Guide (props) {
    // id for post
    const {id} = useParams();
    // crete empty placeholder
    const [Guides,setGuides] = useState({});
    // waiting to get username
    const [username,setUsername] = useState("");
    const [isLoading,setIsLoading] = useState(false);

    useEffect(()=>{
        // add ability to cancel promise call
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        const fetchPost = ()=>{
            setIsLoading(true);
            try{
                axios.get(`https://how-tos-bw.herokuapp.com/posts/${id}`,{CancelToken: source.token})
            .then((resp)=>{
                setGuides(resp.data[0]);
                setIsLoading(false);
            })
            }catch(error) {
                if (axios.isCancel(error)){
                    console.log("cancelled");
                } else {
                    throw error;
                }
            }
        }

        fetchPost();
        // cleanup
        return () => {
            source.cancel();
        }
    },[id]);

    // useEffect(()=>{
    //     // null check
    //     if (Guides?.user_id){
    //         // add ability to cancel promise call
    //         // to remove warnings
    //         const CancelToken = axios.CancelToken;
    //         const source = CancelToken.source();

    //         const fetchName = ()=>{
    //             setIsLoading(true);
    //             try{
    //                 axios.get(`https://how-tos-bw.herokuapp.com/users/${Guides.user_id}`,{CancelToken: source.token})
    //             .then((resp)=>{
    //                 setUsername(`${resp.data.username}`)
    //                 setIsLoading(false);
    //             })
                
    //             }catch(error) {
    //                 if (axios.isCancel(error)){
    //                     console.log("cancelled");
    //                 } else {
    //                     throw error;
    //                 }
    //             }
    //         }
    //             fetchName();
    //         // cleanup
    //         return () => {
    //             source.cancel();
    //         }
    //     }
    // },[Guides])

    
    // let formatDate = moment(guide.date_published).format("MM/DD/YYYY");



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
    if (isLoading){
        return <p className='load-text'>Loading guide...</p>;
    }else if (!Guides){
        return (<p>Sorry, guide not found...</p>);
    }
    return (
        <div className="guide-container">
            <h1 className='post-title'>{Guides.title}</h1><br/>
            <p className='post-desc'>
            in: {catName(Guides.category_id)}<br/>
            By: {Guides.user_id}<br/>
            {/* Views: {guide.post_views}<br/> */}
            {/* Likes: {guide.post_likes}<br/> */}
            {/* Date Published: {moment(guide.date_published).format("MM/DD/YYYY")}<br/> */}
            </p>
            <p>
                <span className='post-desc'>Guide Content:</span><br/>
            {Guides.body}
            </p>
        </div>
    );
}