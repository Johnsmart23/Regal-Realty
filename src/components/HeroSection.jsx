import React from 'react';
import { FaSearch } from 'react-icons/fa'; // import search icon
import { Link } from 'react-router-dom'; // import Link

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Hero Section */}
      <section className="hero-content">
        <div className="hero-text">
          <h1>
            Find Your <br /> Dream Home
          </h1>
          <p>
            Explore our curated selection of exquisite properties meticulously
            tailored to your unique dream home vision.
          </p>
          {/* ✅ Sign up button linked to /signup */}
          <Link to="/signup">
            <button className="signup-btn">Sign up</button>
          </Link>
        </div>

        <div className="hero-image">
          <img src="/images/background.png" alt="Modern House" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <div className="choose-us-content">
            <div className="choose-us-image">
              <img src="/images/dream.png" alt="Luxury Home" />
            </div>
            <div className="choose-us-text">
              <h2>We Help You To Find Your Dream Home</h2>
              <p>
                From cozy cottages to luxurious estates, our dedicated team guides
                you through every step of the journey, ensuring your dream home becomes a reality.
              </p>

              <div className="stats">
                <div className="stat-box">
                  <h3>2K+</h3>
                  <p>Houses Available</p>
                </div>
                <div className="stat-box">
                  <h3>500+</h3>
                  <p>Houses Sold</p>
                </div>
                <div className="stat-box">
                  <h3>100+</h3>
                  <p>Trusted Agents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
