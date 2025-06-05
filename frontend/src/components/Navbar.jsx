import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/SnapBasket.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4">
      <Link className="navbar-brand fw-bold" to="/">
      <img src={logo} alt="SnapBasket Logo" className="img-fluid mb-4" style={{ maxWidth: '200px' }} />
      
      </Link>
      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav gap-3">
          <li className="nav-item">
            <Link className="nav-link fw-semibold active" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categories">Categories</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-semibold" to="/stores-near-you">Stores Near You</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
        <div className="ms-4">
          <Link to="/login" className="btn btn-outline-dark me-2">Login</Link>
          <Link to="/register" className="btn btn-dark">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
