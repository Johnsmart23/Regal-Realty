import React, { useState } from "react";
import imageCompression from "browser-image-compression";

const Agent = () => {
  const [property, setProperty] = useState({
    mainImage: "",
    gallery: [],
    name: "",
    email: "",
    phone: "",
    title: "",
    location: "",
    type: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty((prev) => ({ ...prev, [name]: value }));
  };

  const handleMainImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const compressed = await imageCompression(file, {
          maxSizeMB: 0.2,
          maxWidthOrHeight: 1024,
          useWebWorker: true,
        });
        const reader = new FileReader();
        reader.onload = () => {
          setProperty((prev) => ({ ...prev, mainImage: reader.result }));
        };
        reader.readAsDataURL(compressed);
      } catch (error) {
        console.error("Main image compression failed:", error);
      }
    }
  };

  const handleGalleryChange = async (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 7) {
      alert("You can only upload a maximum of 7 gallery images.");
      return;
    }

    try {
      const compressedImages = await Promise.all(
        files.map(async (file) => {
          const compressed = await imageCompression(file, {
            maxSizeMB: 0.2,
            maxWidthOrHeight: 1024,
            useWebWorker: true,
          });

          return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(compressed);
          });
        })
      );

      setProperty((prev) => ({ ...prev, gallery: compressedImages }));
    } catch (error) {
      console.error("Gallery compression failed:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (property.gallery.length > 7) {
      alert("You can only upload a maximum of 7 gallery images.");
      return;
    }

    const existing = JSON.parse(localStorage.getItem("agentProperties")) || [];

    localStorage.setItem(
      "agentProperties",
      JSON.stringify([...existing, { ...property, id: Date.now() }])
    );

    alert("Property submitted successfully!");

    setProperty({
      mainImage: "",
      gallery: [],
      name: "",
      email: "",
      phone: "",
      title: "",
      location: "",
      type: "",
      price: "",
      description: "",
    });
  };

  return (
    <div className="agent-background">
      <div className="agent-overlay">
        {/* Left: Upload Section */}
        <div className="agent-left">
          <div className="upload-box">
            <label htmlFor="mainImage" className="upload-label">
              {property.mainImage ? (
                <img
                  src={property.mainImage}
                  alt="Main"
                  className="image-preview"
                />
              ) : (
                <p>📷 Upload Main Image</p>
              )}
            </label>
            <input
              type="file"
              id="mainImage"
              accept="image/*"
              onChange={handleMainImageChange}
              hidden
              required
            />
          </div>

          <div className="gallery-upload">
            <label htmlFor="gallery">Upload Gallery Images (Max: 6)</label>
            <input
              type="file"
              id="gallery"
              multiple
              accept="image/*"
              onChange={handleGalleryChange}
              required
            />
            <div className="gallery-preview">
              {property.gallery.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Gallery ${idx}`}
                  className="gallery-img"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right: Form Section */}
        <div className="agent-right">
          <h2>Sell Your Property</h2>
          <form onSubmit={handleSubmit} className="agent-form">
            <input
              type="text"
              name="name"
              value={property.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={property.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <input
              type="text"
              name="phone"
              value={property.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              required
            />
            <input
              type="text"
              name="title"
              value={property.title}
              onChange={handleChange}
              placeholder="Property Title"
              required
            />
            <input
              type="text"
              name="location"
              value={property.location}
              onChange={handleChange}
              placeholder="Location"
              required
            />
            <input
              type="text"
              name="type"
              value={property.type}
              onChange={handleChange}
              placeholder="Property Type (e.g. Duplex)"
              required
            />
            <input
              type="number"
              name="price"
              value={property.price}
              onChange={handleChange}
              placeholder="Price"
              required
            />
            <textarea
              name="description"
              value={property.description}
              onChange={handleChange}
              placeholder="Description"
              rows="4"
              required
            />
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Agent;
