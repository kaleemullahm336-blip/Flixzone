import { useState } from "react";
import faqData from "../data/faqData";

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <button
            className="faq-question"
            onClick={() => setOpen(open === index ? null : index)}
          >
            <span className="question-text">{item.question}</span>
            <span className="icon">{open === index ? "−" : "+"}</span>
          </button>

          {open === index && (
            <div className="faq-answer">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default FAQ;
