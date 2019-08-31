import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { app } from './base.js';
import { AuthContext } from './Auth.js';

import Header from './components/Header';
const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);

        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-page-container">
      <Header />
      <form className="login-page" onSubmit={handleLogin}>
        <h1>Log in</h1>

        <div className="login-container">
          <input
            className="login-input"
            name="email"
            type="email"
            placeholder="Email"
          />
        </div>

        <div className="login-container">
          <input
            className="login-input"
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="login-button" type="submit">
          Log in
        </button>
        <div className="already-signed-up">
          <p>Don't have an account, yet?</p>

          <button className="already-signed-up-btn">
            <Link to="/register" alt="login">
              Sign UP
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Login);
