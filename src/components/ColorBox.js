import React from 'react';
import './ColorBox.css'; // Import the CSS file

function VerticalExample() {
  return (
    
      
      <div className="container">
        <div className="colored-box">
          <div className="content">
            <label>Text inside the colored box</label>
            <div className="links">
              <a href="#link1"id = "link1">Click for more detail  </a>
              <a href="#link2"id = "link2">Remove</a>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default VerticalExample;