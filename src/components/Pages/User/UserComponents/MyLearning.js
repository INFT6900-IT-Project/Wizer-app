import React from 'react';
import './MyLearning.css';
import { useState } from 'react';

function MyLearning() {

  // State to manage which course list is shown
  const [isCompleted, setIsCompleted] = useState(true);

  // Function to toggle between completed and in-progress courses
  const toggleCourses = (status) => {
    setIsCompleted(status);
  };


  return (
    <div>
      <div className='ad-my-learning-wrap'>


      <div className="ad-my-learning-btn-container">
        <button
          className="ad-course-btn"
          onClick={() => toggleCourses(true)}
        >
          Completed 
        </button>
        <button
          className="ad-course-btn"
          onClick={() => toggleCourses(false)}
        >
          In Progress 
        </button>
      </div>

      {/* Course List */}
      <div className="ad-learning-course-list">
        <h2>{isCompleted ? "Completed Courses" : "In Progress Courses"}</h2>
        <ul>
          {(isCompleted ? completedCourses : inProgressCourses).map((course, index) => (
            <li key={index} className="course-item">
              {course}
            </li>
          ))}
        </ul>
      </div>


      </div>

    </div>
  )
}


const completedCourses = [
  "Course 1: Data Analysis Basics",
  "Course 2: Introduction to Python",
  "Course 3: Digital Marketing Essentials"
];

const inProgressCourses = [
  "Course 4: Advanced Web Development",
  "Course 5: Machine Learning Fundamentals"
];

export default MyLearning
