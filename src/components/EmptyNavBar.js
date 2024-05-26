import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './EmptyNavBar.css'; // Import the CSS file
import logo from './logo.png'; // Adjust the path as necessary

export default function AppNavbar() {
  return (
    <Navbar id="navbar" fixed="top" expand={false} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" id="logo" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
