import React from 'react';
import { Link } from 'react-router-dom';

const properties = [
  {
    title: 'Duplex',
    stars: 5,
    image: '/images/Image 1.png',
    gallery: [
      '/images/detail 2.png',
      '/images/detail 3.png',
      '/images/detail 4.png',
      '/images/detail 5.png',
      '/images/detail 6.png',
    ],
    description:
      'This is a six rooms and two pallor duplex, one big kitchen and two rooms and pallor boys quater, big space for motor park',
  },
  {
    title: 'Duplex',
    stars: 5,
    image: '/images/Image 2.png',
    gallery: [
      '/images/Image 11.png',
      '/images/Image 12.png',
      '/images/Image 14.png',
      '/images/detail 5.png',
      '/images/detail 1.png',
    ],
    description:
      'This is a six rooms and two pallor duplex, one big kitchen and two rooms and pallor boys quater, big space for motor park',
  },
  {
    title: 'Duplex',
    stars: 5,
    image: '/images/Image 3.png',
    gallery: [
      '/images/detail 4.png',
      '/images/detail 5.png',
      '/images/detail 6.png',
      '/images/detail 3.png',
      '/images/detail 2.png',
    ],
    description:
      'This is a six rooms and two pallor duplex, one big kitchen and two rooms and pallor boys quater, big space for motor park',
  },
];

const MostPopular = () => {
  return (
    <section className="most-popular">
      <div className="container">
        <h2>Most popular</h2>
        <div className="property-grid">
          {properties.map((property, index) => (
            <div key={index} className="property-card">
              <img src={property.image} alt={property.title} className="main-image" />

              <div className="stars">
                {'★'.repeat(property.stars)}
              </div>

              <div className="gallery">
                {property.gallery.map((img, idx) => (
                  <img key={idx} src={img} alt="Gallery" />
                ))}
              </div>

              <h3>{property.title}</h3>
              <p>{property.description}</p>

              <Link to="/properties" className="explore-btn">
                Explore
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <h2>Most rated</h2>
        <div className="property-grid">
          {properties.map((property, index) => (
            <div key={index} className="property-card">
              <img src={property.image} alt={property.title} className="main-image" />

              <div className="stars">
                {'★'.repeat(property.stars)}
              </div>

              <div className="gallery">
                {property.gallery.map((img, idx) => (
                  <img key={idx} src={img} alt="Gallery" />
                ))}
              </div>

              <h3>{property.title}</h3>
              <p>{property.description}</p>

              <Link to="/properties" className="explore-btn">
                Explore
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostPopular;
