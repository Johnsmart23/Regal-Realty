import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <div className="logo">
          <img src="/images/logo.png" alt="Regal Realty Logo" className="logo" />
          <span className="logo-text">Regal Realty</span>
        </div>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="agent">Agents</Link>
        <Link to="/properties">Properties</Link>
      </nav>

      <div className="nav-actions">
        {/* 👤 User icon linked to Account page */}
        <Link to="/account">
          <button className="user-icon" aria-label="User Profile">👤</button>
        </Link>

        {/* ✅ Sign up button linked to /signup */}
        <Link to="/signup">
          <button className="signup-btn">Sign up</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
