import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="hex-nav">
      <nav>
        <Link to="/">
          <img src="/hex-icon-logo.png" />
          <h1>HexWorld</h1>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
