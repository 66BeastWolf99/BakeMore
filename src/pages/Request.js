import React, { useState } from 'react';
import './Request.css'; // Import the CSS file
import Navbar from '../components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function VerticalExample() {
  // Initialize state to hold form data
  const [formData, setFormData] = useState({
    fullName: 'aa',
    phoneNumber: '22',
    nicNumber: '22',
    dateOfBirth: '12/1//22',
    email: 'wdwd@gmail.com',
    password: 'qsxq',
    confirmPassword: 'qsxq',
    jobRole: 'aa',
  });

  return (
    <div>
      <>
        <Navbar />
        <Form className="form-container">
          <label id="textmain">User Sign-up Response</label>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <br></br><span>{formData.fullName}</span>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <br></br><span>{formData.phoneNumber}</span>
            </Form.Group>

            <Form.Group as={Col} controlId="formNIC">
              <Form.Label>NIC Number</Form.Label>
              <br></br><span>{formData.nicNumber}</span>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formDateOfBirth">
            <Form.Label>Date of Birth</Form.Label>
            <br></br><span>{formData.dateOfBirth}</span>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <br></br><span>{formData.email}</span>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <br></br><span>{formData.password}</span>
            </Form.Group>

            <Form.Group as={Col} controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <br></br><span>{formData.confirmPassword}</span>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formJobRole">
            <Form.Label>Job Role</Form.Label>
            <br></br><span>{formData.jobRole}</span>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="uid">
              <Form.Label>User ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter User ID"
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </Form.Group>
          </Row>

          <Button variant="primary" type="add" id="addbtn">
            Add User
          </Button>
        </Form>
      </>
    </div>
  );
}

export default VerticalExample;
