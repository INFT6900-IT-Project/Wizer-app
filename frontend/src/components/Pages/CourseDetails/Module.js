// Module.js
import React, { useState } from 'react';
import Lesson from './Lesson';

const Module = ({ module }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div className="module">
      <h2 onClick={toggleExpand}>{module.title}</h2>
      {expanded && (
        <div className="lessons">
          {module.lessons.map((lesson, index) => (
            <Lesson key={index} lesson={lesson} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Module;
