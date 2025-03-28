import React from 'react';
import starWarsLogo from '../images/starwarslogo.png';

const Navbar: React.FC = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        backgroundColor: 'transparent', // Make the navbar transparent
        position: 'absolute', // Keep the navbar fixed at the top
        top: 0,
        width: '100%',
        zIndex: 10,
      }}
    >
      <div className="container-fluid d-flex justify-content-center align-items-center">
        {/* Left side: Upcoming and Legacy */}
        <div className="d-flex gap-5 align-items-center"> {/* Increased gap for more spacing */}
          <button
            className="btn"
            style={{
              fontWeight: 'bold',
              fontSize: '1.2rem', // Slightly larger text
              color: 'white',
              background: 'transparent',
              border: 'none',
            }}
          >
            Upcoming
          </button>
          <button
            className="btn"
            style={{
              fontWeight: 'bold',
              fontSize: '1.2rem', // Slightly larger text
              color: 'white',
              background: 'transparent',
              border: 'none',
            }}
          >
            Legacy
          </button>
        </div>

        {/* Center: Star Wars logo */}
        <div className="mx-5"> {/* Increased margin for better spacing */}
          <img
            src={starWarsLogo}
            alt="Star Wars Logo"
            style={{
              height: '120px', // Larger logo
              objectFit: 'contain',
              backgroundColor: 'transparent',
            }}
          />
        </div>

        {/* Right side: Merch and About */}
        <div className="d-flex gap-5 align-items-center"> {/* Increased gap for more spacing */}
          <button
            className="btn"
            style={{
              fontWeight: 'bold',
              fontSize: '1.2rem', // Slightly larger text
              color: 'white',
              background: 'transparent',
              border: 'none',
            }}
          >
            Merch
          </button>
          <button
            className="btn"
            style={{
              fontWeight: 'bold',
              fontSize: '1.2rem', // Slightly larger text
              color: 'white',
              background: 'transparent',
              border: 'none',
            }}
          >
            About
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;