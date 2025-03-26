import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="input-group">
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <button type="submit" className="login-btn">
              Send One Time Password
            </button>
          </form>
          <p className="or-divider">or</p>
          <div className="email-login">
            <button className="social-btn email">
              <i className="fas fa-envelope"></i> Continue with Email
            </button>
            <br />
            <br />
            <button className="social-btn google">
              <i className="fab fa-google"></i> Sign in with Google
            </button>
          </div>
          <p className="signup-text">
            Don't have an account?{" "}
            <Link to="/add/login"> 
              <button>Signup</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
