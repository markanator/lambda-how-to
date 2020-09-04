import React            from 'react';
import lambda           from '../../asset/lambda1.png';
import {Link}           from 'react-router-dom';
import UserNavDrop      from '../H_UserDropdown';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Input,
    Form
} from 'reactstrap';
import './Header.css';

// Passing Props from APP
function Header({logged,logChecker,userData,setSearch,searchText,onSubmit}) {

    return (
        <div className="header-main">
            <Navbar color='light' light fluid='true' expand='md'>
                {/* TO: HOMEPAGE */}
                <Link className='logo' to='/'>
                    <img className='logo' src={lambda} alt='lambda'/>
                </Link>
                <NavbarBrand tag={Link} to='/'>How To</NavbarBrand>
                {/* Added this to make other links push right */}
                <Nav className='mr-auto' navbar></Nav>
                {/* Right side of Navbar */}
                <Nav className='pullRight'>
                    {/* Search bar */}
                    <Form
                    className='header-search-bar'
                    onSubmit={onSubmit}
                    >
                        <Input 
                        className='search-input' 
                        type='text' 
                        placeholder='Search Guides' 
                        name='searchTerm'
                        // all props values
                        value={searchText}
                        onChange={ e=>{ setSearch(e.target.value) } }
                        // ^^^^ prop values
                        />
                    </Form>
                    {/* Conditionals for logged in */}
                    {logged ? null : <NavItem> <NavLink tag={Link} to='/login'   className='NavLink'>Login</NavLink></NavItem>}
                    {logged ? null : <NavItem> <NavLink tag={Link} to='/sign-up' className='NavLink'>Sign-Up</NavLink></NavItem>}
                    
                    {/* DISABLED until we have backend support */}
                    {logged ? <NavItem><UserNavDrop logChecker={logChecker} userData={userData}/></NavItem> : null }
                    {/* ENABLE once loggin system is active */}

                </Nav>
            </Navbar>
        </div>
    );
}

export default Header;