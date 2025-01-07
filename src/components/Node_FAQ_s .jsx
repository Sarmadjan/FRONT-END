import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function FAQSection() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      offset: 120,
    });
  }, []);
  const [activeIndex, setActiveIndex] = useState(null); // No FAQ is open initially.

  const faqs = [
    {
      question: "What makes Node.js ideal for backend development?",
      answer: "Node.js uses JavaScript for both frontend and backend, ensuring faster development cycles. Its non-blocking I/O model is excellent for real-time and data-intensive applications.",
    },
    {
      question: "Can Node.js support enterprise applications?",
      answer: "Yes, Node.js is highly scalable and used by companies like Netflix and LinkedIn, proving its capability for enterprise-grade solutions.",
    },
    {
      question: "Is Node.js suitable for API development?",
      answer: "Definitely! Node.js is widely used for creating RESTful APIs and microservices due to its speed and lightweight architecture.",
    },

  ];

  const toggleFAQ = (index) => {
    // Toggle the active FAQ; if it's already active, set to null.
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="text-center fs-2 ">Frequently Asked Questions !</h2>
      <div className="accordion">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item mb-3 pt-3">
            {/* Question Section */}
            <div
              className="faq-question d-flex justify-content-between align-items-center p-3 bg-light" data-aos="fade-up"
              onClick={() => toggleFAQ(index)}
              style={{ cursor: "pointer" }}
            >
              <span>{faq.question}</span>
              {activeIndex === index ? (
                <FaChevronUp className="text-primary" />
              ) : (
                <FaChevronDown className="text-primary" />
              )}
            </div>

            {/* Answer Section */}
            <div
              className={`faq-answer-wrapper ${activeIndex === index ? "open" : "closed"
                }`}
            >
              {activeIndex === index && (
                <div className="faq-answer p-3">{faq.answer}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;
