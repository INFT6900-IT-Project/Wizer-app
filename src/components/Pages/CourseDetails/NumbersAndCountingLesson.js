// src/components/Pages/CourseDetails/NumbersAndCountingLesson.js
import React from 'react';
import NumbersAndCountingQuiz from './NumbersAndCountingQuiz';
import './LessonDetail.css';

const numbersAndCountingContent = `
  In this lesson, we will learn about numbers and counting in Japanese.
  You will learn how to say basic numbers and how to count objects and people.
  Numbers are essential in Japanese conversation, and there are specific counters for people and objects.
`;

const NumbersAndCountingLesson = () => {
  return (
    <div className="lesson-detail-container">
      <h2>Numbers and Counting in Japanese</h2>
      <p>{numbersAndCountingContent}</p>

      <div className="image-container">
        <img
          src={process.env.PUBLIC_URL + "/ImageVideo/NumbersandCounting.jpg"}
          alt="Numbers and Counting"
          className="lesson-image"
        />
      </div>

      <h3><i class="fa-solid fa-flag-checkered"></i>Quiz Section</h3>
      <NumbersAndCountingQuiz />
    </div>
  );
};

export default NumbersAndCountingLesson;
