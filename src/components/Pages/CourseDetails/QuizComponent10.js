// src/components/Pages/CourseDetails/QuizComponent1.js
import React, { useState } from 'react';
import './QuizComponent.css';




const quizQuestions = [
    {
      question: "Why is finance important in business operations?",
      options: [
        "a) It ensures compliance with government regulations",
        "b) It helps manage resources to meet business obligations",
        "c) It eliminates the need for marketing",
        "d) It only benefits large corporations"
      ],
      answer: "b) It helps manage resources to meet business obligations",
    },
    {
      question: "What role does finance play in business growth?",
      options: [
        "a) It allows businesses to invest in expansion and new projects",
        "b) It reduces the need for skilled employees",
        "c) It eliminates the need for customer service",
        "d) It only applies to non-profit organizations"
      ],
      answer: "a) It allows businesses to invest in expansion and new projects",
    },
    {
      question: "How does finance help in risk management?",
      options: [
        "a) By setting aside funds for emergencies and analyzing financial risks",
        "b) By reducing the cost of raw materials",
        "c) By hiring more employees",
        "d) By increasing the price of products"
      ],
      answer: "a) By setting aside funds for emergencies and analyzing financial risks",
    },
    {
      question: "Which of the following is a function of finance in daily business operations?",
      options: [
        "a) Developing new marketing strategies",
        "b) Managing cash flow and paying expenses",
        "c) Conducting employee training",
        "d) Designing product packaging"
      ],
      answer: "b) Managing cash flow and paying expenses",
    },
    {
      question: "Why is proper financial management important for business sustainability?",
      options: [
        "a) It allows businesses to make informed decisions and maintain profitability",
        "b) It reduces the need for product quality",
        "c) It ensures low employee turnover",
        "d) It eliminates competition"
      ],
      answer: "a) It allows businesses to make informed decisions and maintain profitability",
    }
  ];
  
  
  

const QuizComponent10 = () => {
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


console.log("LessonTargetMarket component is loaded");

export default QuizComponent10;
