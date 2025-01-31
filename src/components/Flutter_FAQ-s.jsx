import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function FAQFlutter() {
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
      question: "What types of applications can be built with Flutter?",
      answer: "Flutter is perfect for building cross-platform applications, including mobile, web, and desktop apps with a single codebase.",
    },
    {
      question: "Does Flutter support high-performance applications?",
      answer: "Yes, Flutter uses the Dart language and a high-performance rendering engine to ensure smooth and fast applications.",
    },
    {
      question: "Is Flutter suitable for large-scale projects?",
      answer: "Absolutely! Flutter’s modular architecture, state management solutions, and integration with backend services make it ideal for large applications.",
    },
    {
      question: "How does Flutter handle UI customization?",
      answer: "Flutter provides a rich set of customizable widgets and flexible UI design options to create visually stunning applications.",
    },
    {
      question: "Can Flutter apps integrate with native features?",
      answer: "Yes! Flutter supports platform channels, allowing seamless integration with native APIs and third-party libraries.",
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

export default FAQFlutter;
