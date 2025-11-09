import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { token, logout } = useAuth();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">BLR-NOW</Link>
      <div className="nav-links">
        {token ? (
          <>
            <Link to="/map" className="nav-link">View Map</Link>
            <button onClick={logout} className="nav-btn-logout">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link-btn">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;