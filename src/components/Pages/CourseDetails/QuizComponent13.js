// src/components/Pages/CourseDetails/QuizComponent1.js
import React, { useState } from 'react';
import './QuizComponent.css';




const quizQuestions = [
    {
        question: "What is aperture in a camera?",
        options: [
            "a) The camera's light sensitivity",
            "b) The opening in the lens that controls light entering the camera",
            "c) The speed at which the camera shutter closes",
            "d) The amount of zoom available"
        ],
        answer: "b) The opening in the lens that controls light entering the camera",
    },
    {
        question: "What is a common effect of using a wide aperture (e.g., f/2.8)?",
        options: [
            "a) A deep depth of field with everything in focus",
            "b) A shallow depth of field with a blurred background",
            "c) Increased noise in the image",
            "d) Reduced color saturation"
        ],
        answer: "b) A shallow depth of field with a blurred background",
    },
    {
        question: "How does a small aperture (e.g., f/16) affect depth of field?",
        options: [
            "a) It creates a shallow depth of field with a blurred background",
            "b) It creates a deep depth of field with more of the scene in focus",
            "c) It makes the image brighter",
            "d) It increases the camera's sensitivity to light"
        ],
        answer: "b) It creates a deep depth of field with more of the scene in focus",
    },
    {
        question: "Which aperture setting is most likely to be used in landscape photography?",
        options: [
            "a) f/2.8",
            "b) f/5.6",
            "c) f/8",
            "d) f/16"
        ],
        answer: "d) f/16",
    },
    {
        question: "What does the f-stop number indicate in relation to aperture?",
        options: [
            "a) The time the shutter stays open",
            "b) The size of the camera's sensor",
            "c) The diameter of the lens opening",
            "d) The camera's focus range"
        ],
        answer: "c) The diameter of the lens opening",
    }
];


  

const QuizComponent13 = () => {
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

export default QuizComponent13;
