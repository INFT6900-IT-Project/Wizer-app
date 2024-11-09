// Lesson.js
import React, { useState } from 'react';
import Quiz from './Quiz';

const Lesson = ({ lesson }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div className="lesson">
      <h3 onClick={toggleExpand}>
        <img src={lesson.image} alt={`${lesson.name} image`} />
        {lesson.name}
      </h3>
      {expanded && (
        <div className="lesson-content">
          <p>{lesson.content}</p>
          {lesson.quiz && <Quiz quiz={lesson.quiz} />}
        </div>
      )}
    </div>
  );
};

export default Lesson;
