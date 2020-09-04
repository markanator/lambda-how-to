import React from 'react';
import {Button} from 'reactstrap';
import './UserInfoArea.css';

// Passing Data from PROFILE.JS
export default function P_UserInfoArea({userData}) {
    return (
        <div className='profile-header'>
            <div className='profile-avatar-container'>
                <img alt='author' src={userData.avatarUrl} className='profile-avatar'/>
            </div>
            <div className='profile-top'>
                <h1 className='profile-name'>{userData.userName}</h1>
                <div className='profile-header-actions'>
                    <Button to="/edit" className='Link' color='info' disabled>Edit</Button>
                </div>
            </div>
            <div className='profile-header-stats'>
                <span className='member-stat'>
                    <i className="fas fa-calendar-day"></i>
                    <span className='signup-date'>Joined {userData.signUpDate}</span>
                </span>
            </div>
            <div className='profile-header-info container-1020'>
                <span className='profile-bio'>
                    {userData.profile_about}
                </span>
            </div>
            
        </div>
    );
}