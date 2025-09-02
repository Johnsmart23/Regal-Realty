import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Signup = () => {
  return (
    <div className="account">
      {/* Left Section with Logo overlaying the image */}
      <div className="left-section">
        <img src="/images/Admin.png" alt="Real Estate" className="bg-image" />
        <div className="logo-overlay">
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="account-page">
          <h2>Create Account</h2>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Sign up</button>
          </form>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
