import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/newsletter" className="nav-link">Newsletter</Link>
      <Link to="/social" className="nav-link">Social</Link>
    </nav>
  );
};

export default NavBar;
