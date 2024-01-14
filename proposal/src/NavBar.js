// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ currentPage, onNextClick, onPrevClick }) => {
  return (
    <div className="navbar">
      <button onClick={onPrevClick} disabled={currentPage === 1}>Previous</button>
      <button onClick={onNextClick} disabled={currentPage === 4}>Next</button>
    </div>
  );
};

export default Navbar;
