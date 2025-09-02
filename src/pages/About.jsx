

const teamMembers = [
  {
    name: 'John Williams',
    role: 'Manager',
    photo: '/images/team 1.png',
  },
  {
    name: 'Michelle Nwoke',
    role: 'Lead Designer',
    photo: '/images/team 2.png',
  },
  {
    name: 'Ifeyoma Eze',
    role: 'Marketing Manager',
    photo: '/images/team 3.png',
  },
  {
    name: 'Frances Igbokwe',
    role: 'Director',
    photo: '/images/team 4.png',
  },
];

const About = () => {
  return (
    <div className="about-wrapper">
      {/* ABOUT US */}
      <section className="about-section bg-blue">
        <h2>ABOUT US</h2>
        <p>
          We are passionate about connecting individuals, families, and businesses with the perfect properties.
          With a team of experienced professionals and a commitment to excellence, we strive to provide an exceptional
          real estate experience for every client.
        </p>
      </section>

      {/* OUR MISSION */}
      <section className="about-section bg-red mission-section">
        <div className="mission-text">
          <h3>OUR MISSION</h3>
          <p>
            Our mission is to simplify the process of buying, selling, or renting properties by leveraging
            innovative technology, industry expertise, and personalized service. We believe that finding a
            place to call home should be an exciting and rewarding journey, and we are here to guide you
            every step of the way.
          </p>
        </div>
        <div className="mission-gallery">
          <img src="/images/about 1.png" alt="Mission 1" />
          <img src="/images/about 2.png" alt="Mission 2" />
          <img src="/images/about 3.png" alt="Mission 3" />
        </div>
      </section>

      {/* MEET OUR TEAM */}
      <section className="about-section bg-blue">
        <h3>MEET OUR TEAM</h3>
        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="team-card">
              <img src={member.photo} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR HISTORY */}
      <section className="about-section bg-white">
        <h3>OUR HISTORY</h3>
        <p>
          At Regal Realty, we are pioneers in revolutionizing the real estate industry. 
          Our journey began with a simple yet powerful vision: to create a seamless and empowering real estate experience for buyers, sellers, renters, and investors. <br /><br />
          With a team of industry experts, cutting-edge technology, and a customer-centric approach, we set out to redefine how people navigate the world of real estate. By combining innovative tools with personalized service, we empower our clients to make informed decisions with confidence. <br /><br />
          Over the years, we have built a reputation for excellence and trust. Our deep understanding of market dynamics, coupled with our commitment to staying ahead of industry trends, ensures that our clients have access to the most comprehensive and up-to-date information available. <br /><br />
          But our story is not just about transactions; it's about the people we serve and the communities we impact. We believe in giving back and making a positive difference in the places we call home. <br /><br />
          Welcome to Regal Realty, where we are transforming real estate experiences one client at a time.
        </p>
      </section>

      {/* WHY REGAL REALTY */}
      <section className="about-section why-regal-section">
        <h2>WHY REGAL REALTY?</h2>
        <div className="why-regal-grid">
          <div className="why-card">
            <img src="/images/team 5.png" alt="Buying Assistance" /> 
            <h4>Buying Assistance</h4>
            <p>
              We personalize property search, property showing, negotiation and offer support.
            </p>
          </div>

          <div className="why-card">
            <img src="/images/team 6.png" alt="Selling Support" /> 
            <img src="/images/team 7.png" alt="Selling Support" /> 
            <img src="/images/team 8.png" alt="Selling Support" /> 
            <h4>Selling Support</h4>
            <p>
              We have a comprehensive property marketing, pricing analysis and closing assistance.
            </p>
          </div>

          <div className="why-card">
            <img src="/images/team 9.png" alt="Rental Services" /> 
            <h4>Rental Services</h4>
            <p>
              We provide rental property search, tenant screening and lease agreement assistance.
            </p>
          </div>

          <div className="why-card">
            <img src="/images/team 10.png" alt="Investment Opportunities" /> 
            <h4>Investment Opportunities</h4>
            <p>
              We prioritize investment property analysis and property management.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
