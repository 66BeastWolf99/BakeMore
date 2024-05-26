import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './SignupForm.css'; // Import the CSS file
import EmptyNavBar from '../components/EmptyNavBar';


function FormExample() {
  return (
    <>
      <EmptyNavBar/>
      <br />

      <Form className="form-container">
      <label id = "textmain">Sign-up form</label>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter full name" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Enter phone number" />
          </Form.Group>

          <Form.Group as={Col} controlId="formNIC">
            <Form.Label>NIC Number</Form.Label>
            <Form.Control type="text" placeholder="Enter NIC number" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formDateOfBirth">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group as={Col} controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formJobRole">
          <Form.Label>Job Role</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Admin</option>
            <option>Cook</option>
            <option>Owner</option>
            
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit"id = "submitbtn">
          Submit
        </Button>
        <label id = "textforid">we will send your user ID, After admin accept your sign-up request,Check your E-mail</label>
      </Form>
    </>
  );
}

export default FormExample;
