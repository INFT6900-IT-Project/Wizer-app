import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure Link is imported
import './Curriculum.css';
import lessonsIcon from './image/lesson1.png';
import downIcon from './image/downicon2.png';
import upIcon from './image/upicon.png';

const Curriculum = ({ data }) => {
  const [expanded, setExpanded] = useState(null);
  const [expandedLesson, setExpandedLesson] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const toggleLesson = (sectionIndex, lessonIndex) => {
    const currentExpanded =
      expandedLesson &&
      expandedLesson.sectionIndex === sectionIndex &&
      expandedLesson.lessonIndex === lessonIndex;
    setExpandedLesson(currentExpanded ? null : { sectionIndex, lessonIndex });
  };

  return (
    <div className="curriculum-container">
      <p className="header-curriculum">
        The two-week starter cycle will introduce the basics of grammar, vocabulary, pronunciation, and situational contexts in Japanese. By the end of the course, students should be able to conduct simple conversations, read and write basic hiragana and katakana, and comprehend simple sentence structure.
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
                  <div
                    onClick={() => toggleLesson(sectionIndex, lessonIndex)}
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  >
                    <img src={lessonsIcon} alt="Lesson" style={{ width: '12px', marginRight: '5px' }} />
                    {lesson.name === "Japanese Alphabets – Hiragana" ? (
                      <Link to="/lesson-detail/hiragana">{lesson.name}</Link>
                    ) : (
                      <span>{lesson.name}</span>
                    )}
                  </div>

                  {/* Show additional content for the expanded lesson below the title */}
                  {expandedLesson &&
                    expandedLesson.sectionIndex === sectionIndex &&
                    expandedLesson.lessonIndex === lessonIndex && (
                      <div className="lesson-content">
                        <p>This is the content for {lesson.name}. The two-week starter cycle will introduce the basics of grammar, vocabulary, pronunciation, and situational contexts in Japanese.</p>
                      </div>
                    )}
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
