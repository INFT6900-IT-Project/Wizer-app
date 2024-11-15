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
      question: "Can I modify royalty-free content?",
      answer: "Yes, most of the time, you can make specific edits and revisions to royalty-free content to suit your purposes. Of course, you may want to check out the licensing terms associated with the content, as some are not modifiable."
    },
    {
      question: "Do I need to give credit when using royalty-free content?",
      answer: "Most of the time, royalty-free does not need any form of attribution. On the other hand, some licenses may ask for credit to come in, so it's better to check the license details first before using the content."
    },
    {
      question: "Is royalty-free content the same as free content?",
      answer: "No, royalty-free does not necessarily mean free. There is usually some one-time fee paid for the content; after that, it's free to use with no recurring royalties. Free content has no purchase attached but may have limitations on its usage."
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
