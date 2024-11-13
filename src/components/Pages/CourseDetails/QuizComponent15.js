// src/components/Pages/CourseDetails/QuizComponent1.js
import React, { useState } from 'react';
import './QuizComponent.css';




const quizQuestions = [
    {
        question: "What does ISO control in a camera?",
        options: [
            "a) The brightness of the camera’s flash",
            "b) The sensitivity of the camera's sensor to light",
            "c) The camera’s focus range",
            "d) The zoom level of the camera"
        ],
        answer: "b) The sensitivity of the camera's sensor to light",
    },
    {
        question: "When should you use a low ISO setting (e.g., ISO 100)?",
        options: [
            "a) In low-light settings to avoid noise",
            "b) In bright settings to minimize noise",
            "c) When you want to capture fast motion",
            "d) When using a flash"
        ],
        answer: "b) In bright settings to minimize noise",
    },
    {
        question: "What is the effect of using a high ISO setting (e.g., ISO 1600) in low-light conditions?",
        options: [
            "a) It decreases the exposure",
            "b) It makes the image grainy or noisy",
            "c) It creates a shallow depth of field",
            "d) It makes the image sharper"
        ],
        answer: "b) It makes the image grainy or noisy",
    },
    {
        question: "Which of the following statements is true about ISO and noise?",
        options: [
            "a) Increasing ISO always improves image quality",
            "b) Higher ISO settings often add noise to the image",
            "c) Lower ISO is only used in indoor photography",
            "d) ISO does not affect image noise"
        ],
        answer: "b) Higher ISO settings often add noise to the image",
    },
    {
        question: "If your photo is too dark and you can’t use a slower shutter speed, what can you do?",
        options: [
            "a) Increase the ISO",
            "b) Decrease the ISO",
            "c) Close the aperture",
            "d) Use a faster shutter speed"
        ],
        answer: "a) Increase the ISO",
    }
];


  

const QuizComponent15 = () => {
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


console.log("LessonISONoise component is loaded");

export default QuizComponent15;
