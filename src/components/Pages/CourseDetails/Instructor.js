import React from 'react';
import './Instructor.css';
import StudentIcon from './image/student.png';
import LessonIcon from './image/lesson.png';
import LogoInInstructor from './image/logoinstructor.png';
import IconFb from './image/Iconfb.png';
import IconIn from './image/IconIn.png';
import IconPr from './image/Iconpr.png';
import IconX from './image/IconX.png';
import IconYt from './image/IconYt.png';

const Instructor = () => {
  return (
    <div className="instructor-card">
      <div className="instructor-header">
        <img
          src={LogoInInstructor}
          alt="Wizer Logo"
        />
        <div className="instructor-info">
          <h2>Basic Japanese Language Course</h2>
          <p>
          This 2-week beginner's course introduces students to the basics of the Japanese language, focusing on essential grammar, vocabulary, pronunciation, and cultural context. By the end of this course, students will be able to engage in simple conversations, read and write basic hiragana and katakana, and understand simple sentence structures. 
          </p>
          <div className="instructor-meta">
            <div className="meta-item">
              <img src={StudentIcon} alt="Students Icon" />
              <span>156 Students</span>
            </div>
            <div className="meta-item">
              <img src={LessonIcon} alt="Lessons Icon" />
              <span>20 Lessons</span>
            </div>
          </div>
        </div>
      </div>

      <p className="instructor-description">
      This 2-week beginner's course introduces students to the basics of the Japanese language, focusing on essential grammar, vocabulary, pronunciation, and cultural context. By the end of this course, students will be able to engage in simple conversations, read and write basic hiragana and katakana, and understand simple sentence structures. 
      </p>
      <div className="instructor-social">
        <span>Follow:</span>
        <a href="#" aria-label="Facebook">
          <img src={IconFb} alt="Facebook Icon" />
        </a>
        <a href="#" aria-label="LinkedIn">
          <img src={IconIn} alt="LinkedIn Icon" />
        </a>
        <a href="#" aria-label="Pinterest">
          <img src={IconPr} alt="Pinterest Icon" />
        </a>
        <a href="#" aria-label="X">
          <img src={IconX} alt="X (formerly Twitter) Icon" />
        </a>
        <a href="#" aria-label="YouTube">
          <img src={IconYt} alt="YouTube Icon" />
        </a>
      </div>
    </div>
  );
};

export default Instructor;
