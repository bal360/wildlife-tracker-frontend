import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link }  from 'react-router-dom';

const NavBar = () => {
     
    return(
        <Navbar bg="dark" variant="dark" className="navbar">
            <Navbar.Brand href="#home" className="nav-brand">
                <img 
                src="https://www.stickpng.com/assets/images/58aeffaac869e092af51ee73.png" 
                alt="coyote tracks logo" 
                height="100" 
                />
            </Navbar.Brand>
                Wildlife Tracker
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/profile/">Profile</Nav.Link>
                </Nav>
        </Navbar>
     )
}

export default NavBar;