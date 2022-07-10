import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../index.css';

export class Header extends Component {
  render() {
    return (

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='header_navbar'>
        <Container>
          <Navbar.Brand href="#home">City-Explorer</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Test</Nav.Link> */}
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Test</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Test</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Test</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Test</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link ><Link to='/' className='nav_links'>Home</Link></Nav.Link>
              <Nav.Link >
              <Link to='/contact'  className='nav_links'>
                Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    );
  }
}

export default Header;
