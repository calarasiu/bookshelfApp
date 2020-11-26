import React from 'react';
import './navbar.scss'

function Navbar() {
  return (
    <div className="navbar flex">
      <div className="nav left flex">
        <p>Books</p>
        <p>Book sharers</p>
      </div>
      <div className="nav-title">
        <h1>//|Bookshelf</h1>
      </div>
      <div className="nav right flex">
        <p>Instructions</p>
        <p>Account</p>
      </div>
  </div>
  );

  }

  export default Navbar;
