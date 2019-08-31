import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <main className="not-found">
    <div>
      <h1>404 | Page Not Found :(</h1>
      <div className="return-home-wrapper">
        <Link to="/" alt="home">
          Return Home
        </Link>
      </div>
    </div>
  </main>
);

export default NotFound;
