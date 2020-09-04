import React, {useState,useEffect}  from 'react';
import {useParams, useHistory}      from 'react-router-dom';
import {axiosWithAuth}              from '../../Axios/axiosWithAuth';
import {
    Card,
    Button,
    Form,
    Input,
    FormGroup,
    Label,
    CardHeader
} from 'reactstrap';
import './Edit.css';

export default function Edit({userData, pubList}) {
    const history = useHistory();
    const [isLoading,setIsLoading] = useState(true);

    // creates empty post template
    const [currentPost,
        setCurrentPost] = useState({});
    const id = useParams();
    const postToEdit = pubList.find(thing => `${thing.id}` === id.id);

    useEffect(()=>{
        setCurrentPost(postToEdit);
        setIsLoading(false);
    },[id,postToEdit])

    const publishBtnHandler = (event)=>{
        event.preventDefault();
        console.log("Published button clicked...");
        axiosWithAuth()
        .put(`/posts/${id}`, currentPost)
        .then(res => {
            console.log('POST!', res);
            window.localStorage.getItem("token");
            history.push(`/users/${userData.userId}`)
        })
        .catch(err => console.log(err));
        console.table(currentPost);
    };

    const changeHandler = event => {
        event.persist();
        // validation would go here
        let name = event.target.name;
        // check for select option that we when we send the data
        // the database will accept
        let value = event.target.type === 'select-one' ? parseInt(event.target.value) : event.target.value;
        setCurrentPost({
            ...currentPost,
            [name]: value
        });
        console.log("Form changed: ", name);
    };

    if (isLoading){
        return <p>Loading...hold on a second...</p>
    }
    return (
        <div className='edit-container'>
            <Card className='edit-wrapper'>
                {/* POST Menu BAR */}
                <CardHeader className='c-header'>
                <FormGroup>
                    <Label for="post-cat-select">
                        <Input 
                        type="select" 
                        name="category_id" 
                        id="category_id"
                        value={currentPost.category_id}
                        onChange={changeHandler}
                        >
                            <option value='' >Category:</option>
                            <option value={1} >Outdoors</option>
                            <option value={2} >Tech</option>
                            <option value={3} >Cooking</option>
                            <option value={4} >Crafts</option>
                        </Input>
                    </Label>
                </FormGroup>
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
                            onClick={(event)=>{
                                publishBtnHandler(event)
                            }}
                        >Publish</Button>
                    </div>
                </CardHeader>
                {/* POST FORM CONTENT */}
                <Form className='form-container'>
                    <FormGroup >
                        <Label className='post-titley'>
                            Post Title
                            <Input
                                type='text'
                                placeholder='Type your title...'
                                name='title'
                                value={currentPost.title}
                                onChange={changeHandler}
                            />
                        </Label>
                    </FormGroup>
                    <FormGroup className='post-content'>
                    <Label className='post-input'>
                            Post Title
                            <Input
                                type='textarea'
                                placeholder='Step 1: ...'
                                name='body'
                                value={currentPost.body}
                                onChange={changeHandler}
                            />
                        </Label>
                    </FormGroup>
                </Form>
            </Card>
        </div>
    );
}
