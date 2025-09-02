import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const CreateAccount = () => {
  return (
    <div className="account">
      {/* Left Section with Logo overlaying the image */}
      <div className="left-section">
        <img src="/images/Auth.png" alt="Real Estate" className="bg-image" />
        <div className="logo-overlay">
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h2 className="heading">Register </h2>

        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>

        <div className="divider">
          <hr />
          <span>or</span>
          <hr />
        </div>

        <Link to="/signup">
          <button className="button button-submit">Create Account</button>
        </Link>
      </div>
    </div>
  );
};

export default CreateAccount;
