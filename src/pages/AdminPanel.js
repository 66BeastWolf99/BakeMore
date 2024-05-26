import React from 'react';
import './AdminPanel.css'; // Import the CSS file
import Navbar from '../components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function VerticalExample() {
  return (
    <div>
      <>
        <Navbar />
        <h3>Admin Panel</h3>
        <Container fluid>
          <Row>
            <Col className="col">
              <button
                className="multiline-button"
                id="rmbutton"
                dangerouslySetInnerHTML={{ __html: 'Recipe<br>Management' }}
              />
            </Col>
            <Col className="col">
              <button
                className="multiline-button"
                id="imbutton"
                dangerouslySetInnerHTML={{ __html: 'Inventory<br>Management' }}
              />
            </Col>
            <Col className="col">
              <button
                className="multiline-button"
                id="smbutton"
                dangerouslySetInnerHTML={{ __html: 'Sales<br>Management' }}
              />
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col className="col">
              <button
                className="multiline-button"
                id="cmbutton"
                dangerouslySetInnerHTML={{ __html: 'Cost<br>Management' }}
              />
            </Col>
            <Col className="col">
              <button
                className="multiline-button"
                id="dpmbutton"
                dangerouslySetInnerHTML={{ __html: 'Daily<br>Production<br>Management' }}
              />
            </Col>
            <Col className="col">
              <button
                className="multiline-button"
                id="umbutton"
                dangerouslySetInnerHTML={{ __html: 'User<br>Management' }}
              />
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
}

export default VerticalExample;
