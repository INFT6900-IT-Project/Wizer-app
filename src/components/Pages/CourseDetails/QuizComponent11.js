// src/components/Pages/CourseDetails/QuizComponent1.js
import React, { useState } from 'react';
import './QuizComponent.css';




const quizQuestions = [
    {
        question: "What is the main purpose of the lens in a camera?",
        options: [
            "a) To store images",
            "b) To focus light onto the camera sensor",
            "c) To control the camera's battery life",
            "d) To adjust the camera's brightness"
        ],
        answer: "b) To focus light onto the camera sensor",
    },
    {
        question: "Which type of camera is known for its compact design and electronic viewfinder?",
        options: [
            "a) DSLR",
            "b) Mirrorless",
            "c) Film Camera",
            "d) Polaroid"
        ],
        answer: "b) Mirrorless",
    },
    {
        question: "How does a neck strap help when handling a camera?",
        options: [
            "a) It prevents accidental drops",
            "b) It improves the photo resolution",
            "c) It makes the camera waterproof",
            "d) It increases battery life"
        ],
        answer: "a) It prevents accidental drops",
    },
    {
        question: "What is the purpose of the shutter button on a camera?",
        options: [
            "a) To adjust the brightness",
            "b) To take a picture",
            "c) To change the lens",
            "d) To view past images"
        ],
        answer: "b) To take a picture",
    },
    {
        question: "Why is it important to hold a camera with both hands?",
        options: [
            "a) It ensures more stability and reduces shake",
            "b) It increases the zoom capability",
            "c) It protects the LCD screen",
            "d) It improves color accuracy"
        ],
        answer: "a) It ensures more stability and reduces shake",
    }
];



  
  

const QuizComponent11 = () => {
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


console.log("LessonUnderstandingYourCamera component is loaded");

export default QuizComponent11;
