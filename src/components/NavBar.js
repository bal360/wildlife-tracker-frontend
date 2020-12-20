import React from 'react';
import { Navbar, Nav, Row } from 'react-bootstrap';
import { GiDeerTrack } from 'react-icons/gi';

const NavBar = () => {
     
  return(
    <Navbar className="navbar" expand="md">
      <Navbar.Brand href="#home" className="nav-brand">
        <GiDeerTrack />
      </Navbar.Brand> 
        WildTracker
        <Navbar.Toggle aria-controls="basic-navbar-navbar" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/profile/">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;