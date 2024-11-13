// src/components/Pages/CourseDetails/QuizComponent1.js
import React, { useState } from 'react';
import './QuizComponent.css';




const quizQuestions = [
    {
        question: "What does shutter speed control in photography?",
        options: [
            "a) The camera's color balance",
            "b) The amount of light the sensor is exposed to and motion blur",
            "c) The sensitivity of the camera sensor to light",
            "d) The zoom level of the camera"
        ],
        answer: "b) The amount of light the sensor is exposed to and motion blur",
    },
    {
        question: "Which shutter speed would you likely use to freeze motion in sports photography?",
        options: [
            "a) 1/1000s",
            "b) 1/30s",
            "c) 1 second",
            "d) 5 seconds"
        ],
        answer: "a) 1/1000s",
    },
    {
        question: "What effect does a slow shutter speed (e.g., 1/30s or slower) have on a photo?",
        options: [
            "a) It freezes fast-moving objects",
            "b) It creates motion blur",
            "c) It brightens the colors",
            "d) It sharpens the image"
        ],
        answer: "b) It creates motion blur",
    },
    {
        question: "When using a slow shutter speed, what can help prevent camera shake?",
        options: [
            "a) Increasing the ISO",
            "b) Using a tripod",
            "c) Using a faster shutter speed",
            "d) Decreasing the aperture size"
        ],
        answer: "b) Using a tripod",
    },
    {
        question: "Which scenario is best for using a slow shutter speed?",
        options: [
            "a) Freezing a bird in flight",
            "b) Capturing light trails from cars at night",
            "c) Photographing a soccer match",
            "d) Shooting a portrait in daylight"
        ],
        answer: "b) Capturing light trails from cars at night",
    }
];





  

const QuizComponent14 = () => {
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


console.log("LessonShutterSpeedMotionControl component is loaded");

export default QuizComponent14;
