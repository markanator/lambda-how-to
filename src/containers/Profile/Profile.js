import React                from 'react';
import UserInfoArea         from '../../components/P_UserInfoArea';
import UserContentArea      from '../../components/P_UserContentArea';
import './Profile.css';

// Passing Data from APP.JS
export default function Profile({userData,pubData}) {
    return (
        <div className='profile-page'>
            <div className='profile-wrapper'>
                {/* IMAGE AND USER INFO AREA */}
                <UserInfoArea userData={userData}/>
                {/* ACTUAL CONTENT GOES HERE */}
                <UserContentArea userData={userData} draftData={pubData}/>
            </div>
        </div>
    );
}