import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
     
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img 
                src="https://www.stickpng.com/assets/images/58aeffaac869e092af51ee73.png" 
                alt="coyote tracks logo" 
                height="100" 
                />
            </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/profile/">Profile</Nav.Link>
                </Nav>
        </Navbar>
     )
}

export default NavBar;