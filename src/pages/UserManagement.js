
import React from 'react';
import './UserManagement.css'; // Import the CSS file
import Navbar from '../components/Navbar';
import ColorBox from '../components/ColorBox';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function VerticalExample() {
  return (
    
      
    <div>
        <>
        <Navbar/>
        <Container class="fluied">
      <Row >
        <Col ><input type="button" value="<" id = "backbutton"/></Col>
        <Col xs={6} ><h3>User Manager</h3></Col>
        <Col ><input type="button" value="User Request" id = "userrequestbutton"/></Col>
      </Row>
    </Container>
        
        <ColorBox/>
        </>
    </div>
    
  );
}

export default VerticalExample;
