import React, {useState} from 'react'
import {
    Collapse,
    NavbarToggler,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import {Link, useHistory} from 'react-router-dom';

// passing USERDATA from HEADER.js
export default function H_UserDropdown({userData}) {
    const [isOpen,
        setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    const history = useHistory();
    
    const logout = e => {
        e.preventDefault();
        localStorage.removeItem('token');
        history.push('/login')
    }

    return (
        <div className='user-menu-dropdown'>
            <Nav className='mr-auto' navbar>
                <UncontrolledDropdown nav inNavbar>
                        {/* MAIN IMAGE GOES HERE */}
                        <DropdownToggle  onClick={toggle} nav caret>
                            <i className="fas fa-user-circle"></i>
                        </DropdownToggle>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                        <DropdownMenu right>
                            {/* OPTION 1 */}
                            <DropdownItem>
                                <Link to={`/users/${userData.userId}`}>Profile</Link>
                            </DropdownItem >

                            {/* OPTION 3 */}
                            {/* <DropdownItem>
                                <Link to={`/profile/${userData.userName}/settings`} >Settings</Link>
                            </DropdownItem> */}

                            <DropdownItem divider/>
                            {/* LOGOUT */}
                            <DropdownItem onClick={logout}>
                                Logout
                            </DropdownItem>
                        </DropdownMenu>
                        </Collapse>
                    </UncontrolledDropdown>
            </Nav>
        </div>
    )
};
