import React from 'react';

import { app } from '../base.js';
import { Link } from 'react-router-dom';
const Header = () => {
  let user = app.auth().currentUser;

  return (
    <header className="navbar">
      <Link to="/" alt="home">
        <div className="logo">
          <p className="nav-title">JOURNAL</p>
        </div>
      </Link>
      <nav>
        {user ? null : (
          <div>
            <Link to="/login" alt="login">
              Login
            </Link>

            <Link to="/register" alt="signup">
              Sign Up
            </Link>
          </div>
        )}
        {user ? (
          <button className="logout-nav" onClick={() => app.auth().signOut()}>
            Sign out
          </button>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
