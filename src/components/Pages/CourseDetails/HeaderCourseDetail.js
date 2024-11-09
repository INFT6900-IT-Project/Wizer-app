import React from "react";
import Levels from "../../image/alllevels.png";
import Student from "../../image/student.png";
import Time from "../../image/time.png";
import Lesson from "../../image/lesson.png";
import Quizz from "../../image/quizz.png";
import "./CourseDetail.css";

const HeaderCourseDetail = ({ course }) => {
  if (!course) {
    return null;
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
      <h1 className="course-title">{course.courseName || "Course Title"}</h1>
      <div className="course-info">
        <span className="info-item time">
          <img src={Time} alt="Time icon" /> {course.duration || "2"} Weeks
        </span>
        <span className="info-item student">
          <img src={Student} alt="Student icon" /> {course.students || "30"} Students
        </span>
        <span className="info-item levels">
          <img src={Levels} alt="Levels icon" /> {course.level || "All levels"}
        </span>
        <span className="info-item lesson">
          <img src={Lesson} alt="Lesson icon" /> {course.lessons || "12"} Lessons
        </span>
        <span className="info-item quizz">
          <img src={Quizz} alt="Quiz icon" /> {course.quizzes || "30"} Quizzes
        </span>
      </div>
    </div>
  );
};

export default HeaderCourseDetail;

