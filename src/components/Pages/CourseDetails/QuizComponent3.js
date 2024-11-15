// src/components/Pages/CourseDetails/QuizComponent1.js
import React, { useState } from 'react';
import './QuizComponent.css';




const quizQuestions = [
    {
        question: "What is a primary difference between goods and services?",
        options: [
          "a) Goods are intangible, services are tangible",
          "b) Goods can be stored, services cannot be stored",
          "c) Goods are always more expensive than services",
          "d) Services are only provided by the government"
      ],
      answer: "b) Goods can be stored, services cannot be stored",
    },
    {
        question: "Which of the following is an example of a good?",
        options: [
          "a) A haircut",
          "b) A smartphone",
          "c) Financial advice",
          "d) Car repair service"
        ],
        answer: "b) A smartphone",
    },
    {
        question: "Which of the following is an example of a service?",
        options: [
          "a) A television",
          "b) A restaurant meal",
          "c) An online course",
          "d) A clothing item"
        ],
        answer: "c) An online course",
    },
    {
        question: "What characteristic is unique to services compared to goods?",
        options: [
          "a) They can be produced in factories",
          "b) They can be touched and stored",
          "c) They are intangible and experienced by the consumer",
          "d) They require physical packaging"
        ],
        answer: "c) They are intangible and experienced by the consumer",
    },
    {
        question: "Why might goods be easier to sell online compared to services?",
        options: [
          "a) Goods are tangible and can be easily described with images and specifications",
          "b) Services are generally cheaper than goods",
          "c) Goods have no delivery costs",
          "d) Services do not require customer reviews"
        ],
        answer: "a) Goods are tangible and can be easily described with images and specifications",
    }
  ];
  

const QuizComponent3 = () => {
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


console.log("LessonGoodsVsServices component is loaded");

export default QuizComponent3;
