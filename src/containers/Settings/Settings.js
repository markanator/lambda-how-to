import React            from 'react';
import {Link}           from 'react-router-dom';
import UserInfoArea     from '../../components/P_UserInfoArea';
import {Col, Row, Form, Alert, Input, Button}       from 'reactstrap';
import './Settings.css';


export default function Settings({userData}) {
    return (
        <div className='settings-container'>
            {/* USER INFO AREA */}
            <UserInfoArea userData={userData}/>
            {/* Link Container */}
            <div className='link-container'>
                        <ul className='link-menu inline'>
                            <li>
                                <Link to={`/profile/${userData.userName}`} className='tab-item'>
                                    <i className="fas fa-address-card list"></i>
                                    <span className='tab-title'>Profile</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/profile/${userData.userName}/#`} className='tab-item'>
                                    <i className="fas fa-edit"></i>
                                    <span className='tab-title'>Drafts</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/profile/${userData.userName}/settings`} className='tab-item active'>
                                    <i className="fas fa-user-cog"></i>
                                    <span className='tab-title'>Settings</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
            {/* Settings content */}
            <div className='settings-wrapper container-1020'>
                <Row>
                    {/* FIRST COLUMN */}
                    <Col sm="4">
                        <div className='boxed-content settings-module password-module'>
                            <h5 className='mod-title'>Change Password</h5>
                            <Form>
                                <Input type='password' placeholder='old password' />
                                <Input type='password' placeholder='Password' />
                                <Input type='password' placeholder='Retype New Password' />
                                <Alert color='danger' className='alert alert-error'>Passwords dont match</Alert>
                                <Button color='info'>Save Password</Button>
                            </Form>
                        </div>
                        <div className='boxed-content settings-module delete-account-module'>
                            <h5 className='mod-title'>Remove Your Account</h5>
                            <p>To remove your profile and everything you posted from howtoguides.com, please email support with your request.</p>
                        </div>
                    </Col>
                    {/* SECOND COLUMN */}
                    <Col sm="4">
                    <div className='boxed-content settings-module'>
                            <h5 className='mod-title'>Change Email</h5>
                            <p><strong>Current Email: </strong>
                            <span style={{color: '#999'}}>{userData.userEmail}</span></p>
                            <form>
                                <Input type='text' placeholder='New Email' />
                                <Input type='text' placeholder='Retype New Email' />
                                <Alert color='danger' className='alert alert-error'>Something went wrong!</Alert>
                                <Button color='info'>Save Email</Button>
                            </form>
                        </div>
                    </Col>
                    {/* THIRD COLUMN */}
                    <Col sm="4">
                    <div className='boxed-content settings-module'>
                            <h5 className='mod-title'>Change Username</h5>
                            <p>{`If you'd prefer a different username than '${userData.username}', you may change it here, or by emailing help@howtoguides.com.\n Consider carefully, as we only let you change it one time!`}</p>
                            <Button color='info'>Request Help!</Button>

                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}