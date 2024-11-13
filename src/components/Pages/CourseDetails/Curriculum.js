//Basic Japanese
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Curriculum.css';
import lessonsIcon from './image/lesson1.png';
import downIcon from './image/downicon2.png';
import upIcon from './image/upicon.png';

const Curriculum = ({ data }) => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="curriculum-container">
      <p className="header-curriculum">
        The two-week starter cycle will introduce the basics of grammar, vocabulary, pronunciation, and situational contexts in Japanese.
      </p>

      {data.map((section, sectionIndex) => (
        <div key={sectionIndex} className="curriculum-section">
          <div className="curriculum-header" onClick={() => toggleExpand(sectionIndex)}>
            <span>
              <img
                src={expanded === sectionIndex ? upIcon : downIcon}
                alt={expanded === sectionIndex ? 'Collapse' : 'Expand'}
                style={{ marginRight: '5px' }}
              />
              {section.title}
            </span>
            <div className="option-curriculum">
              <span>{section.totalLessons} Lessons</span>
              <span>{section.totalTime}</span>
            </div>
          </div>

          {expanded === sectionIndex && (
            <div className="curriculum-lessons">
              {section.lessons.map((lesson, lessonIndex) => (
                <div key={lessonIndex} className="lesson-item">
                  <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                    <img src={lessonsIcon} alt="Lesson" style={{ width: '12px', marginRight: '5px' }} />
                    {lesson.name === "Japanese Alphabets – Hiragana" ? (
                      <Link to="/lesson-detail/hiragana" style={{textDecoration : 'none'}}>{lesson.name}</Link>
                    ) : lesson.name === "Japanese Alphabets – Katakana" ? (
                      <Link to="/lesson-detail/katakana" style={{textDecoration : 'none'}}>{lesson.name}</Link>
                    ) : lesson.name === "Basic Greetings" ? (
                      <Link to="/lesson-detail/basic-greetings" style={{textDecoration : 'none'}}>{lesson.name}</Link>
                    ) : lesson.name === "Numbers and Counting" ? (
                      <Link to="/lesson-detail/numbers-and-counting" style={{textDecoration : 'none'}}>{lesson.name}</Link>

                    ) : (
                      <span>{lesson.name}</span>
                    )}
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
