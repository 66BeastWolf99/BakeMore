import React from 'react';
import './RecipeBox.css'; // Import the CSS file

function VerticalExample() {
  // Define variables for future use
  const variable1 = 'Value 1';
  const variable2 = 'Value 2';

  return (
    <div className="container">
      <div className="colored-box">
        <div className="content">
          <label>Text inside the colored box</label>
          <div className="labels">
            <label id="label1">{variable1}</label>
            <label id="label2">{variable2}</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerticalExample;
