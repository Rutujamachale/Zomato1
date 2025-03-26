import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <div>
      <h2>Search Menu</h2>

      
      <input type="text1" id="search" placeholder="Search food" />

      
      <ul id="menu-list">
        <li className="menu-item">Domino's Pizza</li>

        <li className="menu-item">Pepperoni Pizza</li>
        <li className="menu-item">Veg Burger</li>
        <li className="menu-item">Cheese Burger</li>
        <li className="menu-item">Pasta Alfredo</li>
        <li className="menu-item">Tandoori Chicken</li>
        <li className="menu-item">Paneer Butter Masala</li>
      </ul>
    </div>
    
  );
};


export default Menu;
