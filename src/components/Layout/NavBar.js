import React from 'react';
import { Navbar, Nav, NavDropodown } from 'react-bootstrap';
import Register from '../../containers/AuthContainer/Register';
import Login from '../../containers/AuthContainer/Login'

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" varient="dark">
                <Navbar.Brand href='/'>Git Sum Dim Sum</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='mr-auto'>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                    </Nav>
                    <Nav>
                        <Register />
                        <Login />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default NavBar;