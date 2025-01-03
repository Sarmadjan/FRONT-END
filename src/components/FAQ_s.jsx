import  { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null); // No FAQ is open initially.

  const faqs = [
    {
      question: "What is your software development process?",
      answer: "Our software development process follows the Agile methodology, ensuring iterative and incremental progress.",
    },
    {
      question: "How do I track the progress of my project?",
      answer: "You can track the progress of your project using our project management tools, which provide real-time updates.",
    },
    {
      question: "Do you offer maintenance and support services?",
      answer: "Yes, we offer maintenance and support services to ensure your software solution continues to meet your evolving needs.",
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in a range of technologies, including web development (React, Angular, Vue), mobile app development (iOS, Android), and backend development (Node.js, Python).",
    },
    {
      question: "How do you ensure the security of my software solution?",
      answer: "We follow industry best practices for secure software development, including regular security audits and penetration testing.",
    },
    {
      question: "Can I request changes to my project scope?",
      answer: "Yes, we allow changes to the project scope, but please note that this may impact the project timeline and budget.",
    },
  ];

  const toggleFAQ = (index) => {
    // Toggle the active FAQ; if it's already active, set to null.
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="text-center fs-2 mb-4">Frequently Asked Questions !</h2>
      <div className="accordion">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item mb-3">
            {/* Question Section */}
            <div
              className="faq-question d-flex justify-content-between align-items-center p-3 bg-light"
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
              className={`faq-answer-wrapper ${
                activeIndex === index ? "open" : "closed"
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
