// FAQs.js
import React, { useState } from 'react';
import './FAQs.css';
import DownIcon from './image/downicon2.png';
import UpIcon from './image/upicon.png';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item" onClick={toggleOpen}>
      <div className={`faq-question ${isOpen ? 'open' : ''}`}>
        <h4>{question}</h4>
        <span>
          <img src={isOpen ? UpIcon : DownIcon} alt={isOpen ? 'Collapse' : 'Expand'} />
        </span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FAQs = () => {
  const faqData = [
    {
      question: "What Does Royalty Free Mean?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in."
    },
    {
      question: "Can I use the content for commercial purposes?",
      answer: "Yes, you may use royalty-free content for commercial purposes, depending on the licensing terms. However, it’s best to double-check individual content licenses to ensure compliance."
    },
    {
      question: "Are there any hidden fees with royalty-free content?",
      answer: "Royalty-free content usually comes with a one-time fee, allowing you to use it repeatedly without additional charges. Ensure to review licensing terms for any specific limitations."
    }
  ];

  return (
    <div className="faq-container">
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQs;
