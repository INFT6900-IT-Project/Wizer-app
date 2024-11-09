import React, { useState } from 'react';
import './Curriculum.css';
import lessonsIcon from './image/lesson1.png';
import downIcon from './image/downicon2.png';
import upIcon from './image/upicon.png';
import tickIcon from './image/tick.png';

const Curriculum = ({ data }) => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="curriculum-container">
      <p className="header-curriculum">
      The two-week starter cycle will introduce the basics of grammar, vocabulary, pronunciation, and situational contexts in Japanese. By the end of the course, students should be able to conduct simple conversations, read and write basic hiragana and katakana, and comprehend simple sentence structure.
      </p>

      {data.map((section, index) => (
        <div key={index} className="curriculum-section">
          <div className="curriculum-header" onClick={() => toggleExpand(index)}>
            <span>
              <img
                src={expanded === index ? upIcon : downIcon}
                alt={expanded === index ? 'Collapse' : 'Expand'}
                style={{ marginRight: '5px' }}
              />
              {section.title}
            </span>
            <div className="option-curriculum">
              <span>{section.totalLessons} Lessons</span>
              <span>{section.totalTime}</span>
            </div>
          </div>
          {expanded === index && (
            <div className="curriculum-lessons">
              {section.lessons.map((lesson, i) => (
                <div key={i} className="lesson-item">
                  <span>
                    <img src={lessonsIcon} alt="Lesson" style={{ width: '12px', marginRight: '5px' }} />
                    {lesson.name}
                  </span>
                  <div className="button-time-tick">
                    {lesson.preview && (
                      <button className="preview-button">Preview</button>
                    )}
                    <span className="time-lesson">{lesson.time}</span>
                    <span>
                      <img src={tickIcon} alt="Completed" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Curriculum;
