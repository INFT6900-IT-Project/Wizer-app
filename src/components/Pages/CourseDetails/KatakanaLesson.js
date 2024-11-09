// src/components/Pages/CourseDetails/KatakanaLesson.js
import React from 'react';
import QuizComponent from './QuizComponent';
import './LessonDetail.css';

const katakanaContent = `
  This lesson introduces you to the Katakana alphabet, another foundational script in Japanese.
  You will learn how to read and write basic Katakana characters and recognize them in simple words and sentences.
`;

const KatakanaLesson = () => {
  return (
    <div className="lesson-detail-container">
      <h2>Japanese Alphabets – Katakana</h2>
      <p className="lesson-content">{katakanaContent}</p>

      <div className="image-container">
        <img src="/ImageVideo/katakana.png" alt="Katakana Characters" className="katakana-image" />
      </div>

      <h3>Quiz: Test Your Knowledge of Katakana</h3>
      <QuizComponent />
    </div>
  );
};

export default KatakanaLesson;
