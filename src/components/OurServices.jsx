import React from "react";

const OurServices = () => {
  const services = [
    {
      title: "Buying Assistance",
      description:
        "We personalize property search, property showing, negotiation and offer support.",
      icon: '/images/Image 7.png',
    },
    {
      title: "Selling Support",
      description:
        "We have a comprehensive property marketing, pricing analysis and closing assistance.",
      icon: '/images/Image 8.png',
    },
    {
      title: "Investment Opportunities",
      description:
        "We prioritize investment property analysis and property management.",
      icon: '/images/Image 9.png',
    },
    {
      title: "Rental Services",
      description:
        "We provide rental property search, tenant screening and lease agreement assistance.",
      icon: '/images/Image 10.png',
    },
  ];

  return (
    <section className="our-services">
      <h2 className="our-services-title">OUR SERVICES</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-row ${
              index % 2 === 0 ? "left-border" : ""
            } ${index < 2 ? "bottom-border" : ""}`}
          >
            <img src={service.icon} alt={service.title} className="service-icon" />
            <div className="service-text">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
