import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Register from '../../containers/AuthContainer/Register';
import Login from '../../containers/AuthContainer/Login';
import { userLogout } from '../../actions/authActions';
import './NavBar.css';

const NavBar = (props) => {

    const currentUser = localStorage.getItem('uid');

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

    return (
        <>
            { currentUser ? authLinks : links }
        </>
    );
};

export default connect(null, { userLogout})(NavBar);