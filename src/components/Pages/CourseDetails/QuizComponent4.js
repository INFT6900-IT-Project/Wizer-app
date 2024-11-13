// src/components/Pages/CourseDetails/QuizComponent1.js
import React, { useState } from 'react';
import './QuizComponent.css';




const quizQuestions = [
    {
      question: "What is the main role of the Marketing function in a business?",
      options: [
        "a) Managing the company’s finances",
        "b) Promoting products and engaging with customers",
        "c) Overseeing employee recruitment",
        "d) Handling day-to-day operations"
      ],
      answer: "b) Promoting products and engaging with customers",
    },
    {
      question: "Which function of a business is responsible for managing money, budgets, and investments?",
      options: [
        "a) Marketing",
        "b) Finance",
        "c) Human Resources",
        "d) Operations"
      ],
      answer: "b) Finance",
    },
    {
      question: "What is the primary focus of the Human Resources (HR) function?",
      options: [
        "a) Managing employee recruitment, training, and development",
        "b) Producing goods and services",
        "c) Handling customer complaints",
        "d) Promoting the company’s products"
      ],
      answer: "a) Managing employee recruitment, training, and development",
    },
    {
      question: "Which business function is responsible for ensuring products and services are delivered efficiently to customers?",
      options: [
        "a) Marketing",
        "b) Finance",
        "c) Operations",
        "d) Human Resources"
      ],
      answer: "c) Operations",
    },
    {
      question: "How does the Finance function contribute to the growth of a business?",
      options: [
        "a) By ensuring adequate funds for growth and daily operations",
        "b) By producing quality goods",
        "c) By overseeing customer engagement",
        "d) By hiring skilled employees"
      ],
      answer: "a) By ensuring adequate funds for growth and daily operations",
    }
  ];
  
  

const QuizComponent4 = () => {
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


console.log("LessonKeyFunctionsOfBusiness component is loaded");

export default QuizComponent4;
