import React from 'react';
import QuizComponent1 from './QuizComponent1'; // Import QuizComponent1 for the Katakana quiz
import './LessonDetail.css';

const katakanaContent = `
  This lesson introduces you to the Katakana alphabet, another foundational script in Japanese.
  You will learn how to read and write basic Katakana characters and recognize them in simple words and sentences.
`;

const KatakanaLesson = () => {
  return (
    <div className="lesson-detail-container">
      <h2>Japanese Alphabets – Katakana</h2>
      <p>{katakanaContent}</p>

      {/* Use process.env.PUBLIC_URL for image paths in the public folder */}
      <div className="image-container">
        <img 
          src={`${process.env.PUBLIC_URL}/ImageVideo/katakana.png`} 
          alt="Katakana Characters" 
          className="katakana-image" 
        />
      </div>

      <h3><i class="fa-solid fa-flag-checkered"></i>Quiz Section</h3>
      {/* Render the Katakana quiz component */}
      <QuizComponent1 />
    </div>
  );
};

export default KatakanaLesson;
