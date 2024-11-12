// src/components/Pages/CourseDetails/QuizComponent1.js
import React, { useState } from 'react';
import './QuizComponent.css';

const quizQuestions = [
  {
    question: "What is the katakana character for the sound 'o'?",
    options: ["ア", "イ", "ウ", "エ", "オ"],
    answer: "オ",
  },
  {
    question: "Which of the following is the correct katakana for the sound 'ka'?",
    options: ["ケ", "コ", "カ", "キ"],
    answer: "カ",
  },
  {
    question: "What is the katakana character for the sound 'su'?",
    options: ["サ", "シ", "ス", "セ"],
    answer: "ス",
  },
  {
    question: "How do you write the word 'sushi' in katakana?",
    options: ["スシ", "サシ", "スヒ", "ソシ"],
    answer: "スシ",
  },
  {
    question: "Which of the following is the correct sequence for the vowels 'a, i, u, e, o' in katakana?",
    options: [
      "ア, イ, ウ, エ, オ",
      "オ, イ, エ, ウ, ア",
      "イ, ア, エ, ウ, オ",
      "ウ, エ, ア, イ, オ",
    ],
    answer: "ア, イ, ウ, エ, オ",
  },
];

const QuizComponent1 = () => {
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
      <h2>Quiz: Test Your Knowledge of Katakana</h2>
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
console.log("KatakanaLesson component is loaded");

export default QuizComponent1;
