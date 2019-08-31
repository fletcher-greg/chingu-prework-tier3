import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { app } from './base';
import { Link } from 'react-router-dom';
import Header from './components/Header';

const Register = ({ history }) => {
  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then(response => {
            app
              .auth()
              .currentUser.updateProfile({
                email: email.value
              })
              .then(() => {
                app
                  .database()
                  .ref('users/' + app.auth().currentUser.uid + '/profile')
                  .set({
                    userId: app.auth().currentUser.uid,
                    userEmail: email.value
                  });
              });
          });

        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div>
      <Header />
      <form className="input-container" onSubmit={handleSignUp}>
        <h1>Sign up</h1>
        <div className="signup-container">
          <input
            className="signup-input"
            name="email"
            type="email"
            placeholder="Email"
          />
        </div>

        <div className="signup-container">
          <input
            className="signup-input"
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>

        <button className="signup-button" type="submit">
          Sign Up
        </button>
        <div className="already-signed-up">
          <p>Already have an Account?</p>
          <button className="already-signed-up-btn">
            <Link to="/login" alt="login">
              Login
            </Link>
          </button>
        </div>
      </form>

      {/* <div className="circles circle1" />
      <div className="circles circle2" />
      <div className="circles circle3" /> */}
    </div>
  );
};

export default withRouter(Register);
