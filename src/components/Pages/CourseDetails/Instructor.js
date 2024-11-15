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
          <h2>Instructor</h2>
          <p>
          Gemma Nguyen 
          <p>Expert in Japanese Language</p>
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
      Graduate at the Hanoi University of Japanese Language Studies, Gemma Nguyen has been teaching Japanese for 3 years. She has a passion for teaching and has helped many students achieve their goals in learning Japanese. Gemma is also a certified Japanese language teacher and has a deep understanding of the language and culture. 
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
console.log("Instructor:", Instructor);
export default Instructor;
