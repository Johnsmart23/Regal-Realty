import React, { useState } from "react";

const faqs = [
  {
    question: "What type of properties do regal realty develop?",
    answer: "Regal Realty develops residential, commercial, and luxury properties tailored to client needs.",
  },
  {
    question: "Where is regal realty located in Nigeria?",
    answer: "Regal Realty is located in multiple cities across Nigeria, including Lagos and Abuja.",
  },
  {
    question: "What amenities are expected of regal realty to be provided?",
    answer: "Amenities include 24/7 security, clean water supply, recreational facilities, and backup power.",
  },
  {
    question: "How can I schedule a visit with regal realty?",
    answer: "You can schedule a visit by contacting us through our website or customer service line.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${openIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <div className="faq-icon">{openIndex === index ? "▲" : "▼"}</div>
            </div>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
