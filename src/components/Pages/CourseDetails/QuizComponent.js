// src/components/Pages/CourseDetails/QuizComponent.js
import React, { useState } from 'react';
import './QuizComponent.css';

const quizQuestions = [
  {
    question: "Which of the following is the correct hiragana for the sound 'e'?",
    options: ["あ", "い", "う", "え", "お"],
    answer: "え",
  },
  {
    question: "Which of the following is the correct hiragana for the sound 'ka'?",
    options: ["き", "く", "け", "か"],
    answer: "か",
  },
  {
    question: "What is the hiragana character for the sound 'su'?",
    options: ["さ", "し", "す", "せ"],
    answer: "す",
  },
  {
    question: "How do you write the word 'neko' (cat) in hiragana?",
    options: ["ねき", "ぬこ", "ねこ", "さこ"],
    answer: "ねこ",
  },
  {
    question: "Which of the following is the correct sequence for the vowels 'a, i, u, e, o' in hiragana?",
    options: ["あ, い, う, え, お", "お, い, え, う, あ", "い, あ, え, う, お", "う, え, あ, い, お"],
    answer: "あ, い, う, え, お",
  },
];

const QuizComponent = () => {
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
      <h2>Quiz: Test Your Knowledge of Hiragana</h2>
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

export default QuizComponent;
