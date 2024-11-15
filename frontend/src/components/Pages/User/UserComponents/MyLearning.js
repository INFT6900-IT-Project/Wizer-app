import React from 'react';
import './MyLearning.css';
import { useState } from 'react';
import '../../CourseDetails/Courses';
import { Link } from 'react-router-dom';
import completedCourse1 from '../../../../ImageVideo/completedCourse1.jpg'
import completedCourse2 from '../../../../ImageVideo/completedCourse2.jpg'
import completedCourse3 from '../../../../ImageVideo/completedCourse3.jpg'
import completedCourse4 from '../../../../ImageVideo/completedCourse4.jpg'
import completedCourse5 from '../../../../ImageVideo/completedCourse5.jpg'
import inProgressCourse1 from '../../../../ImageVideo/inProgressCourse1.jpg'
import inProgressCourse2 from '../../../../ImageVideo/inProgressCourse2.jpg'
import courseImage1 from '../../../../ImageVideo/courseImage1.jpg'
import courseImage2 from '../../../../ImageVideo/courseImage2.jpg'
import courseImage3 from '../../../../ImageVideo/courseImage3.jpg'

function MyLearning() {

  // State to manage which course list is shown
  const [inProgress, setInProgress] = useState(true);

  // Function to toggle between completed and in-progress courses
  const toggleCourses = (status) => {
    setInProgress(status);
  };


  return (
    <div>
      <div className='ad-my-learning-wrap'>


        <div className="ad-my-learning-btn-container">
          <button
            className="ad-course-btn"
            onClick={() => toggleCourses(true)}
          >
            In Progress
          </button>
          <button
            className="ad-course-btn"
            onClick={() => toggleCourses(false)}
          >
            Completed
          </button>

        </div>

        {/* Course List */}
        <div className="ad-learning-course-list">
          <h2>{inProgress ? "In Progress Courses" : "Completed Courses"}</h2>
          <ul>
            {(inProgress ? inProgressCourses : completedCourses).map((course, index) => (




              <li key={index} className='ad-course-container'>
                <div className="ad-course-card" >
                  <div className="ad-course-image-wrap">
                    <img src={course.image} alt={course.title} className="ad-course-image" />
                    <span className="course-category">{course.category}</span>
                  </div>
                  <div className="ad-course-content">
                    <div className='ad-course-left'>
                      <p className="ad-course-head">{course.head}</p>
                      <h3 className="ad-course-card-name">{course.title}</h3>
                      <div className="ad-course-meta">
                        {course.feedback ? (
                          <span><i className="fa-regular fa-heart"></i> {course.feedback}</span>
                        ) : (
                          <div>
                            <span><i className="fa-solid fa-repeat"></i> {course.alert}</span>
                            <div className="ad-course-progress-bar-wrap">   {/* progress bar */}
                              <div className="ad-course-progress-bar-bg">
                                <div
                                  className="ad-course-progress-bar"
                                  style={{ width: course.progressPercentage }}
                                />
                              </div>
                              <span className="ad-course-progress-text">{course.progressPercentage}</span>
                            </div>
                          </div>


                        )}
                      </div>
                    </div>
                    <div className="ad-course-right">
                      {course.feedback ? (
                        <>
                          <button className="ad-view-more-btn">
                            <Link to='/user-screen/achievement' style={{ textDecoration: 'none', color: 'white' }}>
                              View Achievement
                            </Link>
                          </button>
                          <a className="ad-my-learning-rate">Rate</a>
                        </>
                      ) : (
                        <>
                          <button className="ad-view-more-btn">
                            <Link to={course.path} style={{ textDecoration: 'none', color: 'white' }}>
                              Go To Course <i class="fa-solid fa-angle-right"></i>
                            </Link>
                          </button>
                          <a className="ad-my-learning-switch">Switch Session</a>
                        </>
                      )}

                    </div>
                  </div>
                </div>
              </li>





            ))}
          </ul>
        </div>


      </div>

    </div>
  )
}

const inProgressCourses = [
  {
    image: courseImage1,
    category: 'Language',
    title: 'Basic Japanese',
    head: 'Course | Wizer Project Network',
    alert: "Don't stop now! Keep the momentum going, success is just ahead!",
    path: '/course-detail/1',
    progressPercentage: `${Math.round((10 / 12) * 100)}%`,
  },
  {
    image: courseImage2,
    category: 'Business',
    title: 'Introduction to Business',
    head: 'Course | Duke Univerisity',
    alert: "It looks like you missed some important deadlines. Reset your deadlines and get started today.",
    path: '/course-detail/2',
    progressPercentage: `${Math.round((2 / 10) * 100)}%`,

  },
  {
    image: courseImage3,
    category: 'Photography',
    title: 'Learn Photography',
    head: 'Training | Wizer Professional Skill Training',
    alert: "It looks like you missed some important deadlines. Reset your deadlines and get started today.",
    path: '/course-detail/3',
    progressPercentage: `${Math.round((5 / 8) * 100)}%`,
  },
  {
    image: inProgressCourse1,
    category: 'Communication',
    title: 'Take Your English Communication Skills to the Next Level',
    head: 'Course | Georgia Institute of Technology',
    alert: 'It looks like you missed some important deadlines. Reset your deadlines and get started today.',
    progressPercentage: `${Math.round((15 / 21) * 100)}%`,
  },
  {
    image: inProgressCourse2,
    category: 'Data',
    title: 'Custom Reports in Google Analytics',
    head: 'Project | Wizer Project Network',
    alert: 'It looks like you missed some important deadlines. Reset your deadlines and get started today.',
    progressPercentage: `${Math.round((4 / 15) * 100)}%`,
  }
];

const completedCourses = [
  {
    image: completedCourse1,
    category: 'Data',
    title: 'Business Analysis & Process Management',
    head: 'Project | Wizer Project Network',
    feedback: 'Great Work! You have passed all requirements and can view your project achievements now.'
  },
  {
    image: completedCourse2,
    category: 'Data',
    title: 'Data Visualization using Plotly and ggplot',
    head: 'Project | Wizer Project Network',
    feedback: 'Great Work! You have passed all requirements and can view your project achievements now.'
  },
  {
    image: completedCourse3,
    category: 'Science',
    title: 'Azure Synapse SQL Pool - Implement Polybase',
    head: 'Project | Wizer Project Network',
    feedback: 'Great Work! You have passed all requirements and can view your project achievements now.'
  },
  {
    image: completedCourse4,
    category: 'Science',
    title: 'Data Science Math Skills',
    head: 'Course | Duke University',
    feedback: 'Great Work! You have passed all requirements and can view your project achievements now.'
  },
  {
    image: completedCourse5,
    category: 'Communication',
    title: 'Speak English Professionally: In Person, Online & On the Phone',
    head: 'Course | Georgia Institute of Technology',
    feedback: 'Great Work! You have passed all requirements and can view your project achievements now.'
  }
];



export default MyLearning
