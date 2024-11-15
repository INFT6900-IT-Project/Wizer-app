// src/components/Pages/CourseDetails/QuizComponent1.js
import React, { useState } from 'react';
import './QuizComponent.css';

const quizQuestions = [
    {
      question: "What is the primary purpose of a business?",
      options: [
        "a) To generate profits",
        "b) To provide employment",
        "c) To create goods or services to satisfy consumer needs",
        "d) To influence government policies"
      ],
      answer: "c) To create goods or services to satisfy consumer needs",
    },
    {
      question: "Which of the following best describes the role of businesses in the economy?",
      options: [
        "a) They only provide jobs",
        "b) They contribute to economic growth by producing goods, creating jobs, and generating wealth",
        "c) They mainly compete with non-profit organizations",
        "d) They focus solely on innovation"
      ],
      answer: "b) They contribute to economic growth by producing goods, creating jobs, and generating wealth",
    },
    {
      question: "What is a key characteristic of a business?",
      options: [
        "a) It operates for charitable purposes only",
        "b) It focuses on producing goods or services",
        "c) It does not involve any financial transactions",
        "d) It only serves the government"
      ],
      answer: "b) It focuses on producing goods or services",
    },
    {
      question: "How does a business benefit society?",
      options: [
        "a) By reducing competition",
        "b) By creating products that meet consumer needs",
        "c) By limiting job opportunities",
        "d) By controlling all aspects of the economy"
      ],
      answer: "b) By creating products that meet consumer needs",
    },
    {
      question: "Which of these is NOT a typical function of a business?",
      options: [
        "a) Marketing",
        "b) Manufacturing",
        "c) Government policy-making",
        "d) Financial management"
      ],
      answer: "c) Government policy-making",
    }
  ];
  

const QuizComponent2 = () => {
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
console.log("LessonWhatIsBusiness component is loaded");

export default QuizComponent2;
