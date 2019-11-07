import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Register from '../../containers/AuthContainer/Register';
import Login from '../../containers/AuthContainer/Login';
import { userLogout } from '../../actions/authActions';
import './NavBar.css';

const NavBar = (props) => {

    const userRole = localStorage.getItem('user_role');

    const links = (
        <>
            <Navbar className="nav-bar" collapseOnSelect expand="lg">
                <Navbar.Brand href='/'>
                    <span>
                        <img className="nav-icon"src="./dumpling_icon.png" alt="icon"/>
                    </span> 
                        Git Sum Dim Sum
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Register />
                        <Login />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>            
        </>
    );

    const authLinks = (
        <>
            <Navbar className="nav-bar" collapseOnSelect expand="lg">
                <Navbar.Brand href='/'>
                    <span>
                        <img className="nav-icon"src="./dumpling_icon.png" alt="icon"/>
                    </span> 
                        Git Sum Dim Sum
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='mr-auto'>
                    </Nav>
                    <Nav>
                        <Button className="profile-button btn btn-light"
                            onClick={ () => props.history.push('/profile') }>
                                Profile
                        </Button>
                        <Button className="logout-button btn btn-light"
                            onClick={ userLogout }>
                                Logout
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );

    const adminLinks = (
        <>
            <Navbar className="nav-bar" collapseOnSelect expand="lg">
                <Navbar.Brand href='/'>
                    <span>
                        <img className="nav-icon"src="./dumpling_icon.png" alt="icon"/>
                    </span> 
                        Git Sum Dim Sum
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='mr-auto'>
                    </Nav>
                    <Nav>
                        <Button className="admin-page-button btn btn-light"
                            onClick={ () => props.history.push('/admin') }>
                                Admin Page
                        </Button>
                        <Button className="logout-button btn btn-light"
                            onClick={ userLogout }>
                                Logout
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );

    const renderSwitch = (userRole) => {
        switch(userRole) {
            case 'user':
                return authLinks
            case 'admin':
                return adminLinks
            default:
                return links
        };
    };

    return (
        <>
            { renderSwitch(userRole) }
        </>
    );
};

export default connect(null, { userLogout})(NavBar);