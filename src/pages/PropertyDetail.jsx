import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const agentProperties = JSON.parse(localStorage.getItem("agentProperties")) || [];
    const selected = agentProperties.find((prop) => prop.id.toString() === id);

    if (!selected) {
      navigate("/properties");
    } else {
      setProperty(selected);
    }
  }, [id, navigate]);

  if (!property) return null;

  // Convert phone to international format for WhatsApp
  const whatsappPhone = property.phone?.replace(/^0/, "234");

  return (
    <div className="property-detail-page">
      {/* Main Image */}
      <div className="property-main-image-container">
        <img src={property.mainImage} alt={property.title} className="property-main-image" />
      </div>

      {/* Gallery */}
      <div className="property-gallery">
        <h3 className="gallery-heading">Gallery</h3>
        <div className="gallery-grid">
          {property.gallery?.length > 0 ? (
            property.gallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Gallery ${idx}`}
                className="gallery-image"
              />
            ))
          ) : (
            <p>No gallery images provided.</p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="property-content container">
        {/* Star Rating */}
        <div className="stars">
          {"★".repeat(property.stars || 5)}{"☆".repeat(5 - (property.stars || 5))}
        </div>

        {/* Property Type */}
        <h2 className="property-type">{property.title}</h2>

        {/* Description */}
        <div className="property-description">
          <p>{property.description}</p>
        </div>

        {/* Price */}
        <p className="property-price">₦{parseInt(property.price).toLocaleString()}</p>

        {/* Location */}
        <p className="property-location">{property.location}</p>

        {/* Contact Buttons */}
        {property.phone && (
          <div className="contact-buttons-vertical">
            <a href={`tel:${property.phone}`} className="call-button">
              Call Agent
            </a>
            <a
              href={`https://wa.me/${whatsappPhone}?text=Hello,%20I'm%20interested%20in%20your%20property%20listing.`}
              className="whatsapp-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetail;
