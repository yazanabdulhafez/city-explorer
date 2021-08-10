import React, { Component } from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
export class Header extends Component {
  render() {
    return (

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">City-Explorer</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Test</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Test</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Test</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Test</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Test</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Test</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
              Test
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;