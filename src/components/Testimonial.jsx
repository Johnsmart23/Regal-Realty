import React from 'react';

const WhatSetsUsApart = () => {
  const features = [
    {
      title: 'TRUST',
      description:
        'We prioritize building strong relationships with our clients based on trust, transparency, and integrity.',
      icon: '/images/Image 4.png',
    },
    {
      title: 'EXPERT GUIDANCE',
      description:
        'We provide expert guidance throughout the buying, selling, or renting process. We are here to answer your questions and offer valuable insights.',
      icon: '/images/Image 5.png',
    },
    {
      title: 'CUSTOMER SERVICE',
      description:
        'Our friendly and responsive customer service team is ready to assist you at every stage, addressing any concerns and ensuring your experience with us is nothing short of exceptional.',
      icon: '/images/Image 6.png',
    },
  ];

  return (
    <section className="what-sets-us-apart">
      <div className="container">
        <h2>WHAT SETS US APART</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <img src={feature.icon} alt={feature.title} className="feature-icon" />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
