// src/components/Pages/CourseDetails/QuizComponent1.js
import React, { useState } from 'react';
import './QuizComponent.css';




const quizQuestions = [
    {
        question: "What is the rule of thirds?",
        options: [
            "a) Placing the subject in the center of the frame",
            "b) Dividing the frame into a 3x3 grid and positioning the subject along the lines or intersections",
            "c) Using three colors in the composition",
            "d) Dividing the frame in half horizontally"
        ],
        answer: "b) Dividing the frame into a 3x3 grid and positioning the subject along the lines or intersections",
    },
    {
        question: "What is the purpose of leading lines in composition?",
        options: [
            "a) To add more colors to the image",
            "b) To guide the viewer's eye towards the subject",
            "c) To divide the image into two equal parts",
            "d) To create a blurred background"
        ],
        answer: "b) To guide the viewer's eye towards the subject",
    },
    {
        question: "Which of the following is an example of framing in photography?",
        options: [
            "a) Placing the subject along the rule of thirds grid",
            "b) Using a doorway or window to surround the subject",
            "c) Leaving open space around the subject",
            "d) Blurring the background to focus on the subject"
        ],
        answer: "b) Using a doorway or window to surround the subject",
    },
    {
        question: "What effect does negative space have in an image?",
        options: [
            "a) It makes the subject appear larger by filling the entire frame",
            "b) It provides empty space around the subject, emphasizing it",
            "c) It adds more elements to the background",
            "d) It reduces the contrast in the image"
        ],
        answer: "b) It provides empty space around the subject, emphasizing it",
    },
    {
        question: "Which composition technique would work well to create a minimalist look?",
        options: [
            "a) Using leading lines",
            "b) Filling the frame with multiple elements",
            "c) Adding negative space around the subject",
            "d) Using framing elements like windows or doorways"
        ],
        answer: "c) Adding negative space around the subject",
    }
];


  

const QuizComponent16 = () => {
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


console.log("LessonIntroductionToComposition component is loaded");

export default QuizComponent16;
