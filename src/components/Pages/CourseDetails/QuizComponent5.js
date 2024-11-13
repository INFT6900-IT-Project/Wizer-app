// src/components/Pages/CourseDetails/QuizComponent1.js
import React, { useState } from 'react';
import './QuizComponent.css';




const quizQuestions = [
    {
      question: "What is a key characteristic of a sole proprietorship?",
      options: [
        "a) It is owned by multiple people",
        "b) The owner has limited liability",
        "c) It is operated by a single individual with unlimited personal liability",
        "d) It is required to have a board of directors"
      ],
      answer: "c) It is operated by a single individual with unlimited personal liability",
    },
    {
      question: "Which of the following is a benefit of a partnership?",
      options: [
        "a) Complete protection from liability",
        "b) Shared resources and skills among partners",
        "c) Double taxation on profits",
        "d) Required government ownership"
      ],
      answer: "b) Shared resources and skills among partners",
    },
    {
      question: "What is one advantage of a corporation?",
      options: [
        "a) Simplified management structure",
        "b) Limited liability protection for its shareholders",
        "c) No need for legal documentation",
        "d) Owners are responsible for business debts"
      ],
      answer: "b) Limited liability protection for its shareholders",
    },
    {
      question: "What does an LLC (Limited Liability Company) combine?",
      options: [
        "a) The limited liability of a corporation and tax benefits of a partnership",
        "b) Unlimited liability and flexibility in ownership",
        "c) Double taxation and limited liability",
        "d) Sole proprietorship features with government ownership"
      ],
      answer: "a) The limited liability of a corporation and tax benefits of a partnership",
    },
    {
      question: "Which type of business ownership is subject to double taxation?",
      options: [
        "a) Sole proprietorship",
        "b) Partnership",
        "c) Corporation",
        "d) LLC"
      ],
      answer: "c) Corporation",
    }
  ];
  
  
  

const QuizComponent5 = () => {
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


console.log("LessonTypesOfBusinessOwnership component is loaded");

export default QuizComponent5;
