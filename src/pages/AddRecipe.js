import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './AddRecipe.css'; // Import the CSS file
import Navbar from '../components/Navbar';

function FormExample() {
  const [increments, setIncrements] = useState([1]);
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState([{ name: '', qty: '', unit: '' }]);
  const [pieces, setPieces] = useState('');

  const addIncrement = () => {
    setIncrements([...increments, increments.length + 1]);
    setIngredients([...ingredients, { name: '', qty: '', unit: '' }]);
  };

  const handleIngredientChange = (index, field, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value;
    setIngredients(newIngredients);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      recipeName,
      ingredients,
      pieces,
    };
    alert(data);

    try {
      const response = await axios.post('https://localhost:5000/routes/recipes', data);
      console.log(response.data);
      alert('Recipe saved successfully!');
    } catch (error) {
      console.error('Error saving recipe:', error);
      alert('Failed to save recipe.');
    }
  };

  return (
    <>
      <Navbar />
      <br />
      <Form className="form-container" onSubmit={handleSubmit}>
        <label id="textmain">.................. New Recipe ..................</label>
        <br />
        <br />
        <Row>
          <Form.Label column lg={2}>
            Name of the product
          </Form.Label>
          <Col>
            <Form.Control
              type="text"
              placeholder="Name"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col xs={7}>
            <span>Name of the ingredient</span>
          </Col>
          <Col>
            <span>QTY</span>
          </Col>
          <Col>
            <span>Unit</span>
          </Col>
        </Row>
        <br />
        {increments.map((increment, index) => (
          <div className="increment" key={increment}>
            <Row>
              <Col xs={7}>
                <Form.Control
                  placeholder="Add ingredient name"
                  value={ingredients[index].name}
                  onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="qty"
                  type="number"
                  min="0" // Set minimum value to 0
                  value={ingredients[index].qty}
                  onChange={(e) => handleIngredientChange(index, 'qty', e.target.value)}
                  onKeyPress={(e) => {
                    // Prevent typing of negative numbers
                    if (e.key === '-' || e.key === '.') {
                      e.preventDefault();
                    }
                  }}
                />
              </Col>
              <Col>
                <Form.Control
                  as="select"
                  value={ingredients[index].unit}
                  onChange={(e) => handleIngredientChange(index, 'unit', e.target.value)}
                >
                  <option value="">Select Unit</option>
                  <option value="kg">kg</option>
                  <option value="g">g</option>
                  <option value="oz">oz</option>
                  {/* Add more options as needed */}
                </Form.Control>
              </Col>
            </Row>
          </div>
        ))}
        <br />
        <div className="counttext">
          <input type="button" value="+ Add new ingredient" id="add" onClick={addIncrement} />
          <br />
          <label id="textforid">
            I include this recipe for
            <input
              type="number"
              id="renum"
              min="0"
              value={pieces}
              onChange={(e) => setPieces(e.target.value)}
            /> pieces of this product
          </label>
        </div>
        <br />
        <Button variant="primary" type="submit" id="submitbtn">
          Save
        </Button>
      </Form>
    </>
  );
}

export default FormExample;
