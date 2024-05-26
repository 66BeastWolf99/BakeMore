
import React from 'react';
import './RecipeList.css'; // Import the CSS file
import Navbar from '../components/Navbar';
import ColorBox from '../components/ColorBox';

function VerticalExample() {
  return (
    
      
    <div>
        <>
        <Navbar/>
        <h3>Recipe Manager</h3>
        <ColorBox/>
        <input type="button" value="+ Add Recipe" id = "addbutton"/>
        </>
    </div>
    
  );
}

export default VerticalExample;
