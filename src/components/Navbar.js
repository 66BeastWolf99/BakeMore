import React from 'react';
import { Navbar, Container, Offcanvas, Nav, Button } from 'react-bootstrap';
import './Navbar.css'; // Import the CSS file
import logo from './logo.png'; // Adjust the path as necessary

export default function AppNavbar() {
  return (
    <Navbar id="navbar" fixed="top" expand={false} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" id="logo" />
        </Navbar.Brand>
        <div className="d-flex align-items-center ms-auto">
          <Button variant="outline-light" className="me-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
          </Button>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
        </div>
        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <img src={logo} alt="Logo" id="logo" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Recipe Management</Nav.Link>
              <Nav.Link href="#">Inventory Management</Nav.Link>
              <Nav.Link href="#">Sales Management</Nav.Link>
              <Nav.Link href="#">Cost Management</Nav.Link>
              <Nav.Link href="#">Daily Production Management</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
