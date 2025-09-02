import React from "react";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column logo-social">
        <div className="footer-brand">
          <img src="/images/logo.png" alt="Regal Realty Logo" className="footer-logo" />
          <span className="footer-text">Regal Realty</span>
        </div>
        <div className="footer-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaEnvelope />
        </div>
      </div>

       <div className="footer-column">
      <h4>COMPANY</h4>
      <ul>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/agent">Agents</Link>
        </li>
        <li>
          <Link to="/properties">Properties</Link>
        </li>
      </ul>
    </div>


     <div className="footer-column">
        <h4>CONTACT</h4>
           <p>
         <a href="mailto:regalrealty@gmail.com">favoursmart666@gmail.com</a>
         </p>
         <p>
             <a href="tel:+2348162974435">+2348127790800</a>
          </p>
      </div>

      <div className="footer-column">
        <h4>Head Office</h4>
        <p>Lagos lifestyle and Golf City,</p>
        <p>KM 7, Lagos/Ibadan Expressway,</p>
        <p>Lagos, Lagos 400271,</p>
        <p>Nigeria.</p>
      </div>
    </footer>
  );
};

export default Footer;
