// src/components/Pages/CourseDetails/QuizComponent1.js
import React, { useState } from 'react';
import './QuizComponent.css';




const quizQuestions = [
    {
      question: "What is the primary purpose of marketing in a business?",
      options: [
        "a) To manage financial investments",
        "b) To attract and retain customers by meeting their needs",
        "c) To oversee employee recruitment",
        "d) To handle daily operations"
      ],
      answer: "b) To attract and retain customers by meeting their needs",
    },
    {
      question: "Which of the following is a key aspect of marketing?",
      options: [
        "a) Product development",
        "b) Employee payroll",
        "c) Inventory management",
        "d) Tax filing"
      ],
      answer: "a) Product development",
    },
    {
      question: "Why is marketing important for a business?",
      options: [
        "a) It ensures compliance with legal regulations",
        "b) It helps create brand awareness and reach new customers",
        "c) It manages the company’s budget",
        "d) It solely focuses on product manufacturing"
      ],
      answer: "b) It helps create brand awareness and reach new customers",
    },
    {
      question: "Which activity is involved in the marketing function?",
      options: [
        "a) Conducting market research",
        "b) Paying employees",
        "c) Tracking inventory",
        "d) Filing taxes"
      ],
      answer: "a) Conducting market research",
    },
    {
      question: "What is the main goal of building customer relationships through marketing?",
      options: [
        "a) To reduce production costs",
        "b) To build customer loyalty and trust",
        "c) To manage internal operations",
        "d) To ensure compliance with tax laws"
      ],
      answer: "b) To build customer loyalty and trust",
    }
  ];
  
  
  

const QuizComponent7 = () => {
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


console.log("LessonWhatIsMarketing component is loaded");

export default QuizComponent7;
