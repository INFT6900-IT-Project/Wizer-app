// Quiz.js
import React from 'react';

const Quiz = ({ quiz }) => {
  return (
    <div className="quiz">
      <h4>{quiz.title}</h4>
      {quiz.questions.map((q, index) => (
        <div key={index} className="question">
          <p>{q.question}</p>
          <ul>
            {q.options.map((option, i) => (
              <li key={i}>{option}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Quiz;
