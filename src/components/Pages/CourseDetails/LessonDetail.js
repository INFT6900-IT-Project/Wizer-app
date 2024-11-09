// src/components/Pages/CourseDetails/LessonDetail.js
import React from 'react';
import QuizComponent from './QuizComponent';
import './LessonDetail.css';

const lessonContent = `
  This lesson introduces you to the Hiragana alphabet, one of the foundational scripts in Japanese.
  You will learn how to read and write basic Hiragana characters and recognize them in simple words and sentences.
`;

const LessonDetail = () => {
  return (
    <div className="lesson-detail-container">
      <h2>Japanese Alphabets – Hiragana</h2>
      <p className="lesson-content">{lessonContent}</p>

      <div className="image-container">
      <img
  src="/ImageVideo/hiragana.png"
  alt="Hiragana Characters"
  className="hiragana-image"
/>
      </div>    

      <h3>Quiz: Test Your Knowledge of Hiragana</h3>
      <QuizComponent />
    </div>
  );
};

export default LessonDetail;
