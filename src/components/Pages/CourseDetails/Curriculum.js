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
                      <Link to="/lesson-detail/numbers-and-counting">{lesson.name}</Link>
                    ) : lesson.name.trim() === "What is a Business?" ? ( 
                      <Link to="/lesson-detail/what-is-a-business">{lesson.name}</Link>
                    ) : lesson.name.trim() === "Goods vs. Services" ? ( 
                      <Link to="/lesson-detail/goods-vs-services">{lesson.name}</Link>
                    ) : lesson.name.trim() === "Key Functions of a Business" ? ( 
                      <Link to="/lesson-detail/key-functions-of-a-business">{lesson.name}</Link> 
                    ) : lesson.name.trim() === "Types of Business Ownership" ? ( 
                      <Link to="/lesson-detail/types-of-business-ownership">{lesson.name}</Link>   
                      //LessonUnderstandingMarketAndCompetition
                    ) : lesson.name.trim() === "Understanding the Market and Competition" ? ( 
                      <Link to="/lesson-detail/understanding-the-market-and-competition">{lesson.name}</Link>  
                      //LessonWhatIsMarketing
                    ) : lesson.name.trim() === "What is Marketing?" ? ( 
                      <Link to="/lesson-detail/what-is-marketing">{lesson.name}</Link>
                      //The 4 Ps of Marketing
                    ) : lesson.name.trim() === "The 4 Ps of Marketing" ? ( 
                      <Link to="/lesson-detail/the-4-Ps-of-marketing">{lesson.name}</Link>  
                    ) : lesson.name.trim() === "Target Market" ? ( 
                      <Link to="/lesson-detail/target-market">{lesson.name}</Link>  
                    ) : lesson.name.trim() === "Importance of Finance in Business" ? ( 
                      <Link to="/lesson-detail/importance-of-finance-in-business">{lesson.name}</Link> 
                    ) : lesson.name.trim() === "Understanding Your Camera" ? ( 
                      <Link to="/lesson-detail/understanding-your-camera">{lesson.name}</Link>   
                    //LessonExposureTriangleBasics  
                  ) : lesson.name.trim() === "Exposure Triangle Basics" ? ( 
                    <Link to="/lesson-detail/exposure-triangle-basic">{lesson.name}</Link>   
                  ) : lesson.name.trim() === "Aperture and Depth of Field" ? ( 
                    <Link to="/lesson-detail/aperture-depth-of-field">{lesson.name}</Link>   
                  ) : lesson.name.trim() === "Shutter Speed for Motion Control" ? ( 
                    <Link to="/lesson-detail/shutter-speed-for-motion-control">{lesson.name}</Link>   
                  ) : lesson.name.trim() === "ISO and Noise" ? ( 
                    <Link to="/lesson-detail/iso-and-noise">{lesson.name}</Link> 
                  ) : lesson.name.trim() === "Practical Assignment – Exposure Triangle in Action" ? ( 
                    <Link to="/lesson-detail/practical-assignment-exposure-triangle-in-action">{lesson.name}</Link> 
                  ) : lesson.name.trim() === "Introduction to Composition" ? ( 
                    <Link to="/lesson-detail/introduction-to-composition">{lesson.name}</Link> 


                  ) : lesson.name.trim() === "Leading Lines and Framing Techniques" ? ( 
                    <Link to="/lesson-detail/leading-limes-and-framing-techniques">{lesson.name}</Link> 
                  ) : lesson.name.trim() === "Understanding Natural and Artificial Light" ? ( 
                    <Link to="/lesson-detail/understanding-natural-and-artificial-light">{lesson.name}</Link> 
                  ) : lesson.name.trim() === "Practical Assignment – Composition and Lighting" ? ( 
                    <Link to="/lesson-detail/practical-assignment-composition-and-lighting">{lesson.name}</Link> 



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
