// src/components/Pages/CourseDetails/QuizComponent1.js
import React, { useState } from 'react';
import './QuizComponent.css';




const quizQuestions = [
    {
      question: "What is a target market?",
      options: [
        "a) A random group of people",
        "b) The specific group of potential customers a business aims to reach",
        "c) All people who live in a certain country",
        "d) People who work for the company"
      ],
      answer: "b) The specific group of potential customers a business aims to reach",
    },
    {
      question: "Why is identifying a target market important for businesses?",
      options: [
        "a) It helps businesses avoid advertising",
        "b) It allows businesses to focus their marketing on customers most likely to buy",
        "c) It reduces the need for customer feedback",
        "d) It eliminates the need for product quality"
      ],
      answer: "b) It allows businesses to focus their marketing on customers most likely to buy",
    },
    {
      question: "Which of the following is an example of demographic segmentation?",
      options: [
        "a) Customers’ preferred brands",
        "b) Customers' age and income level",
        "c) Customers’ geographic location",
        "d) Customers' hobbies and interests"
      ],
      answer: "b) Customers' age and income level",
    },
    {
      question: "What does behavioral segmentation focus on?",
      options: [
        "a) Customers’ physical location",
        "b) Customers’ lifestyles and personality traits",
        "c) Customers’ buying habits and brand loyalty",
        "d) Customers’ level of education"
      ],
      answer: "c) Customers’ buying habits and brand loyalty",
    },
    {
      question: "Which type of market segmentation considers customers' lifestyle and values?",
      options: [
        "a) Demographic segmentation",
        "b) Geographic segmentation",
        "c) Psychographic segmentation",
        "d) Behavioral segmentation"
      ],
      answer: "c) Psychographic segmentation",
    }
  ];
  
  

const QuizComponent9 = () => {
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

export default QuizComponent9;
