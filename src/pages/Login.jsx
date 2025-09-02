import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="account">
      {/* Left Section with Logo overlaying the image */}
      <div className="left-section">
        <img src="/images/login.png" alt="Real Estate" className="bg-image" />
        <div className="logo-overlay">
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="account-page">
          <h2>Login</h2>
          <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
