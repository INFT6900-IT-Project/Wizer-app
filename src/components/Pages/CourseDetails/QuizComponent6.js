// src/components/Pages/CourseDetails/QuizComponent1.js
import React, { useState } from 'react';
import './QuizComponent.css';




const quizQuestions = [
    {
      question: "What is a primary characteristic of a niche market?",
      options: [
        "a) It targets a wide audience",
        "b) It serves a specific, smaller segment of customers",
        "c) It has low competition",
        "d) It is only found in local areas"
      ],
      answer: "b) It serves a specific, smaller segment of customers",
    },
    {
      question: "What does market share represent?",
      options: [
        "a) The total number of products sold in a market",
        "b) The percentage of total sales a company holds in a market",
        "c) The total revenue of a market",
        "d) The number of competitors in a market"
      ],
      answer: "b) The percentage of total sales a company holds in a market",
    },
    {
      question: "Which of the following is a common competitive strategy?",
      options: [
        "a) Price hiking",
        "b) Product obsolescence",
        "c) Differentiation",
        "d) Ignoring competition"
      ],
      answer: "c) Differentiation",
    },
    {
      question: "In which type of market structure does one company have complete control over the market?",
      options: [
        "a) Monopolistic competition",
        "b) Oligopoly",
        "c) Monopoly",
        "d) Perfect competition"
      ],
      answer: "c) Monopoly",
    },
    {
      question: "Why is it important for a business to understand its competition?",
      options: [
        "a) To replicate competitors' products exactly",
        "b) To create strategies that provide a competitive advantage",
        "c) To avoid innovation",
        "d) To reduce customer base"
      ],
      answer: "b) To create strategies that provide a competitive advantage",
    }
  ];
  
  
  
  

const QuizComponent6 = () => {
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


console.log("LessonUnderstandingMarketAndCompetition component is loaded");

export default QuizComponent6;
