import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="hero-section">
      <h1>Welcome to BLR-NOW</h1>
      <h2>The Real-Time Notice Board for Your Neighborhood.</h2>
      <p>
        Find spontaneous study groups, pickup football games, art workshops, 
        and more happening right around the corner.
      </p>
      <div className="hero-buttons">
        <Link to="/register" className="btn btn-primary">Get Started</Link>
        <Link to="/login" className="btn btn-secondary">Login</Link>
      </div>
    </div>
  );
};

export default HomePage;