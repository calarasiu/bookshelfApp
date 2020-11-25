import React from 'react';
import './navbar.scss'

function Navbar() {
  return (
    <div class="navbar flex">
      <div class="nav left flex">
        <p>Books</p>
        <p>Book sharers</p>
      </div>
      <div class="nav-title">
        <h1>//|Bookshelf</h1>
      </div>
      <div class="nav right flex">
        <p>Instructions</p>
        <p>Account</p>
      </div>
  </div>
  );

  }

  export default Navbar;
