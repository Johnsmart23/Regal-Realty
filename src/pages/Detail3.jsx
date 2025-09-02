import React from 'react';

const Detail = () => {
  // Agent's contact info
  const callPhone = "08127790800";              // for tel: link
  const whatsappPhone = "2348127790800";        // for WhatsApp (no leading zero)

  // Images
  const mainImage = { src: '/images/Rectangle 95.png', alt: 'Main Photo (Photo 1)' };

  const galleryImages = [
    { src: '/images/detail 4.png', label: 'Photo 1' },
    { src: '/images/detail 5.png', label: 'Photo 2' },
    { src: '/images/detail 6.png', label: 'Photo 3' },
    { src: '/images/detail 3.png', label: 'Photo 4' },
    { src: '/images/detail 2.png', label: 'Photo 5' },
    { src: '/images/detail 6.png', label: 'Photo 6' },
    { src: '/images/Rectangle 66.png', label: 'Photo 7' },
  ];

  return (
    <div className="detail-container">
      {/* ✅ Main Image */}
      <img
        src={mainImage.src}
        alt={mainImage.alt}
        className="detail-main-image"
      />

      {/* ✅ Gallery Section */}
      <div className="detail-gallery-section">
        <h3 className="detail-gallery-title">Gallery</h3>
        <div className="detail-gallery">
          {galleryImages.map((image, index) => (
            <div key={index} className="detail-thumbnail-wrapper">
              <img
                src={image.src}
                alt={image.label}
                className="detail-thumbnail"
              />
              <p className="detail-thumbnail-label">{image.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Info Section */}
      <div className="detail-info">
        <div className="detail-stars">★★★★★</div>
        <h2 className="detail-title">Duplex</h2>
        <p className="detail-description">
          This is a six rooms and two pallor duplex, one big kitchen and two rooms and pallor boys quater,
          big space for motor park.
        </p>
        <h3 className="detail-price">#14,500,000</h3>
        <p className="detail-address">
          019 Opposite Ajao estate,<br />
          Fatai Irawo street,<br />
          River State Nigeria.
        </p>

        {/* ✅ Contact Buttons */}
        <div className="contact-buttons-vertical">
          <a href={`tel:${callPhone}`} className="call-button">
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
      </div>
    </div>
  );
};

export default Detail;
