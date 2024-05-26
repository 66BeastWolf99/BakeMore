import React, { useState } from 'react';
import './RecipeView.css'; // Make sure the CSS filename matches
import Navbar from '../components/Navbar';
import RecipeBox from '../components/RecipeBox';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function VerticalExample() {
  // Initialize state for the label
  const [labelText, setLabelText] = useState('Example');

  // Event handler to prevent negative numbers
  const handleNumberChange = (e) => {
    const value = e.target.value;
    if (value < 0) {
      e.target.value = 0; // Reset to zero if the value is negative
    }
  };

  return (
    <div>
      <Navbar />
      <Container fluid>
        <Row className="align-items-center">
          <Col>
            <input type="button" value="<" id="backbutton" />
          </Col>
          <Col xs={6} className="text-center">
            <h3>Recipe of <label>{labelText}</label></h3>
          </Col>
          <Col className="text-right">
            <input type="button" value="Edit" id="editbutton" />
            <input type="button" value="Delete" id="deletebutton" />
          </Col>
        </Row>
      </Container>

      <RecipeBox />
      <div class ="bottom">
        <h4>This recipe makes one unit!</h4>
        <label>
          I want to make
          <input 
            type="number" 
            id="count" 
            min="0" 
            onChange={handleNumberChange} 
          />
          pieces 
          <input type="button" value="Show me the recipe" id="recipecal" />
        </label>
      </div>
    </div>
  );
}

export default VerticalExample;
