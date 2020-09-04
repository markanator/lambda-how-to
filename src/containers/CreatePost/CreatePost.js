import React, {useState}        from 'react';
import {useParams,useHistory}   from 'react-router-dom';
import {axiosWithAuth}          from '../../Axios/axiosWithAuth';
import {Input,Card,CardHeader,Label,Button, Form} from 'reactstrap';
import './CreatePost.css';

// This is the CREATE Guide Page
function CreatePost({userData}) {
    // const {id} = useParams();
    const history = useHistory();

    // Empty Example of whats needed
    const [postFormat,
        setPostFormat] = useState({
        // post_imgUrl: '',
        // post_id: id.p_id,
        title: '',
        body: '',
        user_id: userData.userId,
        category_id: 0,
        // token: userData.token
        // post_views: 0,
        // post_likes: 0,
        // date_created: id.p_id,
        // date_published: 0,
        // isDraft: true,
        // isPublished: false
    });

    // onChange function
    const inputChange = e => {
        e.persist();
        // Validation would go here
        console.log('input changed!', e.target.name);
        // Lets us solve checked vs data
        let value = e.target.type === 'checkbox'
            ? e.target.checked
            : e.target.value;
        // sets the key to proper value
        setPostFormat({
            ...postFormat,
            [e.target.name]: value
        });
    };

    const publishBtnHandler = (event)=>{
        event.preventDefault();
        console.log("Published button clicked...");
        console.table(postFormat);
        axiosWithAuth()
            .post(`/posts`, postFormat)
            .then(res => {
                console.log('POST!', res);
                window.localStorage.getItem("token");
                history.push(`/users/${userData.userId}`)
            })
            .catch(err => console.log(err));
        
    };

    return (
        <div className='create-container'>
            <Card className='create-wrapper'>
                <Form>
                {/* POST Menu BAR */}
                <CardHeader className='c-header'>
                    <Label className='pCat'>
                        <Input 
                        type="select" 
                        name="category_id" 
                        id="category_id"
                        value={postFormat.category_id}
                        onChange={inputChange}
                        >
                            <option >Category:</option>
                            <option value={4} >Crafts</option>
                            <option value={3} >Cooking</option>
                            <option value={1} >Outside</option>
                            <option value={2} >Tech</option>
                        </Input>
                    </Label>
                    <div className='post-options'>
                        {/* <Button 
                            className='hBtn' 
                            color='secondary'
                            name='previewBtn' 
                            disabled
                        >Preview</Button> */}
                        {/* <Button 
                            className='hBtn' 
                            color='info'
                            name='saveBtn' 
                            onClick={(event)=>{
                                saveBtnHandler(event)
                            }}
                        >Save</Button> */}
                        <Button 
                            className='hBtn' 
                            color='success'
                            name='publishBtn'
                            type="submit"
                            onClick={(event)=>{
                                publishBtnHandler(event)
                            }}
                        >Publish</Button>
                    </div>
                </CardHeader>
            <div className='form-container'>
                {/* GUIDE TITLE */}
                <label className='pTitle'>
                    <Input 
                    type='text' 
                    name='title' 
                    placeholder='Guide title'
                    value={postFormat.title}
                    onChange={inputChange}
                    />
                </label><br/>
                {/* GUIDE IMG URL */}
                {/* <label className='pTitle'>
                    <Input 
                    type='text' 
                    name='post_imgUrl' 
                    placeholder='imgur url link'
                    value={postFormat.post_imgUrl}
                    onChange={inputChange}
                    />
                </label><br/> */}
                {/* GUIDE BODY CONTENT */}
                <label className='pInput'>
                    <Input 
                    type='textarea' 
                    name='body' 
                    placeholder='Guide Content'
                    value={postFormat.body}
                    onChange={inputChange}
                    />
                </label>
            </div>
            </Form>
        </Card>
        </div>
    );
}

export default CreatePost;