// src/components/Pages/CourseDetails/NumbersAndCountingQuiz.js
import React, { useState } from 'react';
import './QuizComponent.css';

const quizQuestions = [
  {
    question: "What is the Japanese word for the number '5'?",
    options: ["よん (yon)", "ろく (roku)", "ご (go)", "しち (shichi)"],
    answer: "ご (go)",
  },
  {
    question: "How do you say the number '10' in Japanese?",
    options: ["じゅう (juu)", "なな (nana)", "はち (hachi)", "きゅう (kyuu)"],
    answer: "じゅう (juu)",
  },
  {
    question: "Which of the following is the correct way to count two people in Japanese?",
    options: ["いちにん (ichinin)", "ふたり (futari)", "さんにん (sannin)", "ひとつ (hitotsu)"],
    answer: "ふたり (futari)",
  },
  {
    question: "What is the correct counter for objects when counting three items in Japanese?",
    options: ["ふたつ (futatsu)", "みっつ (mittsu)", "よっつ (yottsu)", "いつつ (itsutsu)"],
    answer: "みっつ (mittsu)",
  },
  {
    question: "How do you count five people in Japanese?",
    options: ["ごにん (gonin)", "よんにん (yonin)", "ふたり (futari)", "いちにん (ichinin)"],
    answer: "ごにん (gonin)",
  },
];

const NumbersAndCountingQuiz = () => {
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
      <h2>Quiz: Numbers and Counting</h2>
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

export default NumbersAndCountingQuiz;
