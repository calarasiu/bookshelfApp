import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar flex">
      <div className="nav left flex">
        <p>Books</p>
        <p>Book sharers</p>
      </div>
      <div className="nav-title">
        <Link to="/"><h1>//|Bookshelf</h1></Link>
      </div>
      <div className="nav right flex">
        <p>About</p>
        <p>Account</p>
      </div>
  </div>
  );

  }

  export default Navbar;
