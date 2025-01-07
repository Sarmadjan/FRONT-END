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
      question: "Why is Python a good choice for backend development?",
      answer: "Python is easy to learn, highly versatile, and supported by a vast library ecosystem, making it ideal for complex applications, data processing, and AI integrations.",
    },
    {
      question: "Can Python handle large-scale applications?",
      answer: "Yes, Python frameworks like Django and Flask are designed for scalability and can handle large-scale, high-traffic applications effectively.",
    },
    {
      question: "Is Python secure for backend development?",
      answer: "Absolutely! With robust libraries and frameworks, Python provides strong security features to protect your applications from vulnerabilities.",
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
