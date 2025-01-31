import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function FAQNative() {
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
      question: "What types of applications can be built with React Native?",
      answer: "React Native is ideal for building cross-platform mobile applications for iOS and Android using a single codebase.",
    },
    {
      question: "Does React Native support high-performance applications?",
      answer: "Yes, React Native offers native modules and optimizations like Hermes engine to improve app performance.",
    },
    {
      question: "Is React Native suitable for large-scale applications?",
      answer: "Absolutely! With proper state management (Redux, Context API) and modular architecture, React Native can efficiently handle large projects.",
    },
    {
      question: "How does React Native handle UI customization?",
      answer: "React Native provides a rich set of customizable components, supports third-party UI libraries, and allows direct interaction with native UI elements.",
    },
    {
      question: "Can React Native apps integrate with native features?",
      answer: "Yes! React Native supports native modules, enabling seamless integration with device features like GPS, Camera, Bluetooth, and more.",
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

export default FAQNative;
