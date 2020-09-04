import React from "react";
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
import RenderDrafts from '../../components/P_RenderDrafts';
import {Card, CardTitle} from 'reactstrap'
import './UserContentArea.css';

// PASSING DATA FROM PROFILE.JS
export default function UserContentArea({userData, draftData}) {
    // for consistency when creating a new page
    let p_id = Date.now();

    return (
        <div className='user-body'>
            {/* Link Container */}
            <div className='link-container'>
                <ul className='link-menu inline'>
                    <li>
                        <Link to={`/users/${userData.user_id}`} className='tab-item active'>
                            <i className="fas fa-address-card list"></i>
                            <span className='tab-title'>Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/users/${userData.user_id}/#`} className='tab-item'>
                            <i className="fas fa-edit"></i>
                            <span className='tab-title'>Drafts</span>
                        </Link>
                    </li>
                    {/* <li>
                        <Link to={`/profile/${userData.user_id}/settings`} className='tab-item'>
                            <i className="fas fa-user-cog"></i>
                            <span className='tab-title'>Settings</span>
                        </Link>
                    </li> */}
                </ul>
            </div>

            {/* GUIDES - CONTENT */}
            <div className="user-link-content">
                <div className='user-guides-wrapper'>
                    <div className='member-sec-nav'>
                        <div className="btn-group">
                            {/* Used for UI only */}
                            <Button className="Link" color="secondary" disabled>Guides</Button>
                        </div>
                    </div>
                    <div className='member-sec-content container-1020'>
                        <div className='member-draft-list'>
                            
                            {/* ADD POST LINK */}
                            <div className='article-card-main card-group create-post-module'>
                                <Card className='card-item card create-post'>
                                    <Link
                                        to={`/posts/${p_id}/create`}
                                        onClick={e => {
                                        console.log("New Post Id: ", p_id);
                                    }}>
                                        <span className='create-post-icon'>
                                            <i className="fas fa-plus"></i>
                                        </span>
                                        <div className='card-body-group'>
                                            <CardTitle className='title'>Create a Guide!</CardTitle>
                                        </div>
                                    </Link>
                                </Card>
                            </div>

                            {/* RENDER DRAFTS */}
                            {draftData.length === 0
                                ? <p>Nothing here!</p>
                                : draftData.map((draft) => {
                                    return <RenderDrafts
                                        key={draft.id}
                                        data={draft}
                                        />
                                })}

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}