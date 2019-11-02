import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap';
import Register from '../../containers/AuthContainer/Register';
import Login from '../../containers/AuthContainer/Login';
import { userLogout } from '../../actions/authActions';
import './NavBar.css';

const NavBar = (props) => {

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
                        <Button onClick={ () => props.history.push('/profile') }>Profile</Button>
                        <Button onClick={ userLogout }>Logout</Button>
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