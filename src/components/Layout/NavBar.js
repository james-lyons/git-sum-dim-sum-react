import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import Register from '../../containers/AuthContainer/Register';
import Login from '../../containers/AuthContainer/Login';
import { userLogout } from '../../actions/authActions';
import './NavBar.css';

const NavBar = () => {

    const currentUser = localStorage.getItem('uid');

    const links = (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" varient="light">
                <Navbar.Brand href='/'>Git Sum Dim Sum</Navbar.Brand>
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
            <Navbar collapseOnSelect expand="lg" bg="dark" varient="dark">
                <Navbar.Brand href='/'>Git Sum Dim Sum</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='mr-auto'>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                        <Nav.Link onClick={ userLogout }>Logout</Nav.Link>
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