import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const defaultProperties = [
  {
    title: "Duplex",
    location: "abuja",
    type: "duplex",
    price: 7000000,
    stars: 5,
    image: "/images/1 details.png",
    gallery: [
      "/images/detail 2.png",
      "/images/detail 3.png",
      "/images/detail 4.png",
      "/images/detail 5.png",
      "/images/detail 6.png",
    ],
    description:
      "This is a six-room, two-parlour duplex with one big kitchen, a pool, outdoor garden, a two-room boys' quarters, and a spacious car park.",
  },
  {
    title: "Luxury Villa",
    location: "lagos",
    type: "villa",
    price: 10000000,
    stars: 5,
    image: "/images/Rectangle 67.png",
    gallery: [
      "/images/Image 11.png",
      "/images/Image 12.png",
      "/images/Image 14.png",
      "/images/detail 5.png",
      "/images/detail 1.png",
    ],
    description:
      "Spacious villa featuring 6 bedrooms, a pool, luxury finishings, and beautiful gardens for outdoor relaxation.",
  },
  {
    title: "Bungalow",
    location: "delta",
    type: "bungalow",
    price: 4000000,
    stars: 5,
    image: "/images/Rectangle 95.png",
    gallery: [
      "/images/detail 4.png",
      "/images/detail 5.png",
      "/images/detail 6.png",
      "/images/detail 3.png",
      "/images/detail 2.png",
    ],
    description:
      "This is four rooms, one big kitchen and a pallor bungalow with 24/7 light, well secured, and enough compound.",
  },
  {
    title: "Duplex",
    location: "river",
    type: "duplex",
    price: 6000000,
    stars: 5,
    image: "/images/Image 3.png",
    gallery: [
      "/images/detail 4.png",
      "/images/detail 5.png",
      "/images/detail 6.png",
      "/images/detail 3.png",
      "/images/detail 2.png",
    ],
    description:
      "We have a nice two rooms all en-suite and a parlour, a room self-contained boys' quarters, and a very big space for car park.",
  },
  {
    title: "Duplex",
    location: "abuja",
    type: "duplex",
    price: 8500000,
    stars: 5,
    image: "/images/Rectangle 95(1).png",
    gallery: [
      "/images/detail 4.png",
      "/images/detail 5.png",
      "/images/detail 6.png",
      "/images/detail 3.png",
      "/images/detail 2.png",
    ],
    description:
      "This is a six-room and two-parlour duplex, one big kitchen and a room and pallor boys' quarters, big space for car park.",
  },
  {
    title: "Contemporary Mansion",
    location: "lagos",
    type: "mansion",
    price: 15000000,
    stars: 5,
    image: "/images/Rectangle 67(1).png",
    gallery: [
      "/images/detail 4.png",
      "/images/detail 5.png",
      "/images/detail 6.png",
      "/images/detail 3.png",
      "/images/detail 2.png",
    ],
    description:
      "This is a four-room and two-parlour mansion with a big kitchen, two-room and pallor boys' quarters, children playground, a pool, and beautiful gardens.",
  },
];

const Properties = () => {
  const [filters, setFilters] = useState({ location: "", type: "", price: "" });
  const [allProperties, setAllProperties] = useState([]);

  useEffect(() => {
    const uploaded = JSON.parse(localStorage.getItem("agentProperties")) || [];
    setAllProperties([...defaultProperties, ...uploaded]);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filterByPrice = (price, range) => {
    if (!range) return true;
    const ranges = {
      "1-5": [1000000, 5000000],
      "6-10": [6000000, 10000000],
      "10+": [10000000, Infinity],
    };
    const [min, max] = ranges[range];
    return price >= min && price <= max;
  };

  const filteredProperties = allProperties.filter((property) => {
    const matchLocation = !filters.location || property.location === filters.location;
    const matchType = !filters.type || property.type === filters.type;
    const matchPrice = filterByPrice(property.price, filters.price);
    return matchLocation && matchType && matchPrice;
  });

  return (
    <section className="properties-page">
      <div className="container">
        <h2>Properties</h2>

        {/* Filter Bar */}
        <div className="filter-bar">
          <select name="location" value={filters.location} onChange={handleFilterChange}>
            <option value="">Location</option>
            <option value="abuja">Abuja</option>
            <option value="lagos">Lagos</option>
            <option value="river">River</option>
            <option value="delta">Delta</option>
          </select>

          <select name="type" value={filters.type} onChange={handleFilterChange}>
            <option value="">Type</option>
            <option value="duplex">Duplex</option>
            <option value="villa">Luxury Villa</option>
            <option value="bungalow">Bungalow</option>
            <option value="mansion">Mansion</option>
          </select>

          <select name="price" value={filters.price} onChange={handleFilterChange}>
            <option value="">Price Range</option>
            <option value="1-5">₦1,000,000 - ₦5,000,000</option>
            <option value="6-10">₦6,000,000 - ₦10,000,000</option>
            <option value="10+">₦10,000,000+</option>
          </select>

          <button className="search-icon-btn">
            <FaSearch />
          </button>
        </div>

        {/* Property Cards */}
        <div className="properties-grid">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property, index) => {
              const isDefault = index < defaultProperties.length;
              const link = isDefault
                ? `/detail${index + 1}`
                : `/property/${property.id}`;

              return (
                <div key={index} className="properties-card">
                  <img
                    src={property.image || property.mainImage}
                    alt={property.title}
                    className="properties-main-image"
                  />

                  <div className="properties-stars">
                    {"★".repeat(property.stars || 5)}
                  </div>

                  <div className="properties-gallery">
                    {(property.gallery || []).map((img, idx) => (
                      <img key={idx} src={img} alt={`Gallery ${idx + 1}`} />
                    ))}
                  </div>

                  <h3>{property.title}</h3>
                  <p>{property.description}</p>

                  <Link to={link} className="properties-explore-btn">
                    Explore
                  </Link>
                </div>
              );
            })
          ) : (
            <p>No properties match the selected filters.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Properties;
