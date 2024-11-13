// src/components/Pages/CourseDetails/QuizComponent1.js
import React, { useState } from 'react';
import './QuizComponent.css';




const quizQuestions = [
    {
      question: "What are the 4 Ps of marketing?",
      options: [
        "a) Product, Price, Place, Promotion",
        "b) Product, Process, People, Price",
        "c) Price, Profit, Product, Promotion",
        "d) People, Product, Position, Price"
      ],
      answer: "a) Product, Price, Place, Promotion",
    },
    {
      question: "Which of the following describes the 'Product' in the 4 Ps of marketing?",
      options: [
        "a) The way a business sets its prices",
        "b) The channels used to reach customers",
        "c) The actual goods or services offered to meet customer needs",
        "d) The techniques used to advertise"
      ],
      answer: "c) The actual goods or services offered to meet customer needs",
    },
    {
      question: "What does 'Place' refer to in the 4 Ps of marketing?",
      options: [
        "a) The physical location of the business headquarters",
        "b) The distribution channels used to reach customers",
        "c) The price of the product",
        "d) The promotional tactics used"
      ],
      answer: "b) The distribution channels used to reach customers",
    },
    {
      question: "Which P involves the strategies used to inform and persuade customers about the product?",
      options: [
        "a) Price",
        "b) Promotion",
        "c) Product",
        "d) Place"
      ],
      answer: "b) Promotion",
    },
    {
      question: "Why is 'Price' an important element of the 4 Ps?",
      options: [
        "a) It determines where a product will be sold",
        "b) It affects customer perception and profitability",
        "c) It dictates the color and design of the product",
        "d) It replaces the need for promotion"
      ],
      answer: "b) It affects customer perception and profitability",
    }
  ];
  
  
  

const QuizComponent8 = () => {
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


console.log("Lesson4PsOfMarketing component is loaded");

export default QuizComponent8;
