import React from 'react';
import starWarsLogo from '../images/starwarslogo.png';

const Navbar: React.FC = () => {
  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: 'transparent', // Make the navbar transparent
        position: 'absolute', // Keep the navbar fixed at the top
        top: 0,
        width: '100%',
        zIndex: 10,
      }}
    >
      {/* Individual buttons */}
      <button
        className="navbar-upcoming btn"
        style={{
          fontWeight: 'bold',
          fontSize: '1.2rem',
          color: 'white',
          background: 'transparent',
          border: 'none',
        }}
      >
        Upcoming
      </button>

      <button
        className="navbar-legacy btn"
        style={{
          fontWeight: 'bold',
          fontSize: '1.2rem',
          color: 'white',
          background: 'transparent',
          border: 'none',
        }}
      >
        Legacy
      </button>

      {/* Center: Star Wars logo */}
      <div className="navbar-logo">
        <img
          src={starWarsLogo}
          alt="Star Wars Logo"
          style={{
            height: '120px',
            objectFit: 'contain',
            backgroundColor: 'transparent',
          }}
        />
      </div>

      <button
        className="navbar-merch btn"
        style={{
          fontWeight: 'bold',
          fontSize: '1.2rem',
          color: 'white',
          background: 'transparent',
          border: 'none',
        }}
      >
        Merch
      </button>

      <button
        className="navbar-about btn"
        style={{
          fontWeight: 'bold',
          fontSize: '1.2rem',
          color: 'white',
          background: 'transparent',
          border: 'none',
        }}
      >
        About
      </button>
    </nav>
  );
};

export default Navbar;