// src/components/Pages/CourseDetails/QuizComponent1.js
import React, { useState } from 'react';
import './QuizComponent.css';




const quizQuestions = [
    {
        question: "What is the main function of aperture in the exposure triangle?",
        options: [
            "a) It controls the duration of light exposure",
            "b) It adjusts the sensitivity to light",
            "c) It controls the amount of light entering the camera",
            "d) It increases image resolution"
        ],
        answer: "c) It controls the amount of light entering the camera",
    },
    {
        question: "How does shutter speed affect an image?",
        options: [
            "a) It determines the depth of field",
            "b) It controls motion blur or sharpness",
            "c) It reduces noise in low-light conditions",
            "d) It changes the color of the image"
        ],
        answer: "b) It controls motion blur or sharpness",
    },
    {
        question: "What happens when you increase the ISO setting?",
        options: [
            "a) The image becomes darker",
            "b) The sensor becomes less sensitive to light",
            "c) The image may become grainier or noisier",
            "d) The depth of field becomes shallower"
        ],
        answer: "c) The image may become grainier or noisier",
    },
    {
        question: "Which setting would you adjust to create a shallow depth of field?",
        options: [
            "a) Use a high ISO",
            "b) Use a large aperture (e.g., f/2.8)",
            "c) Use a fast shutter speed",
            "d) Use a small aperture (e.g., f/16)"
        ],
        answer: "b) Use a large aperture (e.g., f/2.8)",
    },
    {
        question: "If your photo is too bright, which of the following adjustments could help correct the exposure?",
        options: [
            "a) Increase the ISO",
            "b) Use a faster shutter speed",
            "c) Open the aperture wider",
            "d) Use a slower shutter speed"
        ],
        answer: "b) Use a faster shutter speed",
    }
];

  
  

const QuizComponent12 = () => {
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


console.log("LessonExposureTriangleBasics component is loaded");

export default QuizComponent12;
