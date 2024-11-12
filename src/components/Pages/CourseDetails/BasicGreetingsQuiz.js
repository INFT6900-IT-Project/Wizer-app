// src/components/Pages/CourseDetails/BasicGreetingsQuiz.js
import React, { useState } from 'react';
import './QuizComponent.css';

const quizQuestions = [
  {
    question: "What is the correct Japanese phrase for 'Good morning'?",
    options: ["こんばんは", "こんにちは", "おはよう", "さようなら"],
    answer: "おはよう",
  },
  {
    question: "How do you say 'Good night' in Japanese?",
    options: ["おやすみなさい", "こんにちは", "ありがとう", "はい"],
    answer: "おやすみなさい",
  },
  {
    question: "Which of the following greetings would you use to say 'Goodbye' in Japanese?",
    options: ["おはようございます", "さようなら", "ありがとう", "すみません"],
    answer: "さようなら",
  },
  {
    question: "What does 'こんにちは' mean?",
    options: ["Good evening", "Good afternoon / Hello", "Thank you", "I'm sorry"],
    answer: "Good afternoon / Hello",
  },
  {
    question: "Which of the following is the polite version of 'Thank you'?",
    options: ["すみません", "ありがとう", "ありがとうございます", "おはよう"],
    answer: "ありがとうございます",
  },
];

const BasicGreetingsQuiz = () => {
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
      <h2>Quiz: Basic Greetings</h2>
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


export default BasicGreetingsQuiz; 
