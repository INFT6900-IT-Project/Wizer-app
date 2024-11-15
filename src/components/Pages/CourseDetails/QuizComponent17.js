// src/components/Pages/CourseDetails/QuizComponent1.js
import React, { useState } from 'react';
import './QuizComponent.css';




const quizQuestions = [
    {
        question: "What is the purpose of leading lines in photography?",
        options: [
            "a) To increase the brightness of the image",
            "b) To guide the viewer's eye towards the subject",
            "c) To blur the background",
            "d) To create a colorful image"
        ],
        answer: "b) To guide the viewer's eye towards the subject",
    },
    {
        question: "Which of the following can be used as a leading line in a photo?",
        options: [
            "a) A river flowing toward the subject",
            "b) A bright light in the background",
            "c) A small object next to the subject",
            "d) The camera’s flash"
        ],
        answer: "a) A river flowing toward the subject",
    },
    {
        question: "What is framing in photography?",
        options: [
            "a) Placing the subject in the center of the frame",
            "b) Using objects within the scene to create a 'frame' around the subject",
            "c) Adding extra lights around the subject",
            "d) Blurring the subject to make it stand out"
        ],
        answer: "b) Using objects within the scene to create a 'frame' around the subject",
    },
    {
        question: "Which of these is an example of framing?",
        options: [
            "a) Using trees or branches to surround the subject",
            "b) Placing the subject directly in front of a bright light",
            "c) Using a fast shutter speed",
            "d) Setting a high ISO"
        ],
        answer: "a) Using trees or branches to surround the subject",
    },
    {
        question: "How does framing affect the viewer’s focus in a photo?",
        options: [
            "a) It directs the viewer's attention towards the subject",
            "b) It makes the background more noticeable",
            "c) It increases the brightness of the entire scene",
            "d) It reduces contrast in the image"
        ],
        answer: "a) It directs the viewer's attention towards the subject",
    }
];



  

const QuizComponent17 = () => {
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


console.log("LessonLeadingLinesAndFramingTechniques component is loaded");

export default QuizComponent17;
