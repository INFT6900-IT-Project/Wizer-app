import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import CourseForm from "./CourseForm";
import UpdateCourseForm from "./UpdateCourseForm";
import "./../ownermodule/ManagementCourse.css"; 

function ManagementCourse() {
  const [courses, setCourses] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const formRef = useRef(null);

  const handleShowForm = () => {
    setIsFormVisible(true);
  };

  const handleShowEditForm = (courseId) => {
    setSelectedCourseId(courseId);
    setIsEditFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const handleCloseEditForm = () => {
    setIsEditFormVisible(false);
    setSelectedCourseId(null);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/course-detai/");
        setCourses(response.data);
      } catch (error) {
        console.error("There was an error fetching the courses!", error);
      }
    };
    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/course-detai/${id}`);
      setCourses((prevCourses) => prevCourses.filter((course) => course._id !== id));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setIsFormVisible(false);
      setIsEditFormVisible(false);
    }
  };

  useEffect(() => {
    if (isFormVisible || isEditFormVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFormVisible, isEditFormVisible]);

  const handleShowAll = () => {
    window.location.reload();
  };

  return (
    <div className="management-container">
      <aside className="sidebar">
        <h2 className="ad-module-owner-title">Course Management</h2>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Course Management</li>
            <li>Learner Management</li>
            <li>Message</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside>
      
      <main className="main-content">
        <h3 className="title">Course Management</h3>
        
        <div className="search-bar">
          <input placeholder="Enter Learner Name" />
          <input placeholder="Enter User ID" />
          <input placeholder="Email" />
          <input placeholder="Courses" />
        </div>
        
        <div className="action-buttons">
          <button className="btn-show-all" onClick={handleShowAll}>Show all</button>
          <button className="btn-add-course" onClick={handleShowForm}>Add Course</button>
          <button className="btn-update-course"onClick={handleShowEditForm}>Update Course</button>
        </div>
        
        <table className="course-table">
          <thead>
            <tr>
              <th>Select</th>
              <th>User ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Courses</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course._id}>
                <td><input type="checkbox" /></td>
                <td className="highlighted-id">{course._id}</td>
                <td>{course.firstName}</td>
                <td>{course.lastName}</td>
                <td>{course.email}</td>
                <td>{course.phoneNumber}</td>
                <td>{course.courseName}</td>
                <td>
                  <button className="btn-edit" onClick={() => handleShowEditForm(course._id)}>Edit</button>
                  <button className="btn-delete" onClick={() => handleDelete(course._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>




      {isFormVisible && (
        <div ref={formRef} className="modal">
          <CourseForm onClose={handleCloseForm} />
        </div>
      )}
      
      {isEditFormVisible && (
        <div ref={formRef} className="modal">
          <UpdateCourseForm courseId={selectedCourseId} onClose={handleCloseEditForm} />
        </div>
      )}

      </main>
    </div>
  );
}

export default ManagementCourse;

