import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Login.css'; // Import the CSS file
import EmptyNavBar from '../components/EmptyNavBar';


function FormExample() {
  return (
    <>
      <EmptyNavBar/>
      <br />

      <Form className="form-container">
      <label id = "textmain">User Sign-up form</label>
        <div id="input">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formID">
            <Form.Label>User ID</Form.Label>
            <Form.Control type="text" placeholder="Enter User ID" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>
        </div>
        <Button variant="primary" type="login"id = "loginbtn">
          Login
        </Button>
        <label id = "textforform">For sign-up please fill this form</label>

      </Form>
      <br />

    </>
  );
}

export default FormExample;

