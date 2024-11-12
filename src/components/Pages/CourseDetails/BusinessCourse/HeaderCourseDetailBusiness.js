import React from "react";
import Levels from '../../../../ImageVideo/alllevels.png';
import Student from '../../../../ImageVideo/student.png';
import Time from '../../../../ImageVideo/time.png';
import Lesson from '../../../../ImageVideo/lesson.png';
import Quizz from '../../../../ImageVideo/quizz.png';
import "./CourseDetail.css";

export const HeaderCourseDetailBusiness = ({ course }) => {
    
    if (!course) {
      return <p>Loading course details...</p>; // Fallback if course data isn't available yet
    }

  return (

  <div className="course-detail">
      <div className="course-header">
        <span className="badge">{course.category || "Photography"}</span>
        <span className="author">
          by{" "}
          <span className="name-author" style={{ color: "white" }}>
            {course.author || "Gemma Nguyen"}
          </span>
        </span>
      </div>
      <h1 className="course-title">{course.title || course.courseName || "Course Title"}</h1>
      <div className="course-info">
        <span className="info-item time">
          <img src={Time} alt="Time icon" /> {course.duration || "2"} Weeks
        </span>
        <span className="info-item student">
          <img src={Student} alt="Student icon" /> {course.students || "25"} Students
        </span>
        <span className="info-item lesson">
          <img src={Lesson} alt="Lesson icon" /> {course.lessons || "20"} Lessons
        </span>
        <span className="info-item quizz">
          <img src={Quizz} alt="Quizz icon" /> {course.quizzes || "5"} Quizzes
        </span>
      </div>
    </div>
  );
};

export default HeaderCourseDetailBusiness;