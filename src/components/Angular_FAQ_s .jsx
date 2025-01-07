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
      question: "Why is Angular a good choice for enterprise applications?",
      answer: "Angular is a complete framework with built-in tools for routing, forms, and state management. It’s highly scalable and ideal for building enterprise-level applications.",
    },
    {
      question: "What kind of applications is Angular best suited for?",
      answer: "Angular is perfect for applications requiring complex workflows, dynamic content, or multi-user interfaces, such as dashboards and large-scale web apps.",
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
