// src/components/Pages/CourseDetails/QuizComponent1.js
import React, { useState } from 'react';
import './QuizComponent.css';




const quizQuestions = [
    {
        question: "What is the main source of natural light in photography?",
        options: [
            "a) Studio lamps",
            "b) The sun",
            "c) On-camera flash",
            "d) LED lights"
        ],
        answer: "b) The sun",
    },
    {
        question: "When is 'golden hour' for photography?",
        options: [
            "a) Just after noon",
            "b) Just after sunrise and just before sunset",
            "c) Late at night",
            "d) Around midnight"
        ],
        answer: "b) Just after sunrise and just before sunset",
    },
    {
        question: "Which of the following is a common characteristic of hard light?",
        options: [
            "a) Soft shadows and even lighting",
            "b) Minimal contrast",
            "c) Strong shadows and high contrast",
            "d) Cooler color temperature"
        ],
        answer: "c) Strong shadows and high contrast",
    },
    {
        question: "What is an advantage of artificial light in photography?",
        options: [
            "a) It requires specific times of the day to be effective",
            "b) It provides consistent lighting regardless of time or weather",
            "c) It is only useful in natural settings",
            "d) It always produces warmer tones"
        ],
        answer: "b) It provides consistent lighting regardless of time or weather",
    },
    {
        question: "What does color temperature refer to in lighting?",
        options: [
            "a) The size of the light source",
            "b) The warmth or coolness of the light",
            "c) The intensity of the light",
            "d) The duration of the light exposure"
        ],
        answer: "b) The warmth or coolness of the light",
    }
];


  

const QuizComponent18 = () => {
  const [userAnswers, setUserAnswers] = useState(Array(quizQuestions.length).fill(null));
  const [score, setScore] = useState(null);
  const [attempts, setAttempts] = useState(0);

  const handleAnswerChange = (index, selectedOption) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = selectedOption;
    setUserAnswers(updatedAnswers);
  };

  const calculateScore = () => {
    let currentScore = 0;
    quizQuestions.forEach((question, index) => {
      if (userAnswers[index] === question.answer) currentScore++;
    });
    setScore(currentScore);
    setAttempts(attempts + 1);
  };

  const resetQuiz = () => {
    setUserAnswers(Array(quizQuestions.length).fill(null));
    setScore(null);
  };

  return (
    <div className="quiz-container">
      {/* <h2>Quiz: Test Your Knowledge of Katakana</h2> */}
      {quizQuestions.map((question, index) => (
        <div key={index} className="quiz-question">
          <p className="question-text">{question.question}</p>
          <div className="quiz-options">
            {question.options.map((option) => (
              <label key={option} className="quiz-option">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={userAnswers[index] === option}
                  onChange={() => handleAnswerChange(index, option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}

      {score === null ? (
        <button onClick={calculateScore} className="submit-button">Submit Quiz</button>
      ) : (
        <div className="quiz-results">
          <p>Your Score: {score} / {quizQuestions.length}</p>
          <p>Attempts: {attempts}</p>
          <button onClick={resetQuiz} className="retake-button">Retake Quiz</button>
        </div>
      )}
    </div>
  );
};


console.log("LessonUnderstandingNaturalAndArtificialLight component is loaded");

export default QuizComponent18;
