import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpdateCourseForm.css';

function UpdateCourseForm({ courseId, onClose }) {
  const [formData, setFormData] = useState({
    img: null,
    time: '',
    student: '',
    price: '',
    sale: '',
    author: '',
    courseName: '',
  });

  // Fetch the current course data when the component mounts
  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/course-detai/${courseId}`);
        setFormData(response.data); // Populate form with fetched data
      } catch (error) {
        console.error('Error fetching course data:', error);
        alert('Failed to load course data');
      }
    };

    if (courseId) {
      fetchCourseData();
    }
  }, [courseId]);

  // Handle text input and other field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file input change specifically for image uploads
  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      img: e.target.files[0], // Set selected file
    }));
  };

  // Submit form data to update the course
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Use FormData to handle file uploads
    const updateData = new FormData();
    if (formData.img) updateData.append('img', formData.img); // Only append image if a new one is selected
    updateData.append('time', formData.time);
    updateData.append('student', formData.student);
    updateData.append('price', formData.price);
    updateData.append('sale', formData.sale);
    updateData.append('author', formData.author);
    updateData.append('courseName', formData.courseName);

    try {
      const response = await axios.put(`http://localhost:3000/api/course-detai/${courseId}`, updateData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Required for file uploads
        },
      });
      alert('The course has been updated successfully.');
      onClose(); // Close the form after submission
    } catch (error) {
      console.error('Error updating course:', error);
      alert('Failed to update course');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="update-course-form">
      <h2>Update Course</h2>
      <div className="form-group">
        <label>Image:
          <input type="file" name="img" accept="image/*" onChange={handleFileChange} />
        </label>
        {formData.img && <small>Current image: {formData.img.name || 'Selected from database'}</small>}
      </div>
      <div className="form-group">
        <label>Time:
          <input type="number" name="time" value={formData.time || ''} onChange={handleChange} max={5} required />
        </label>
      </div>
      <div className="form-group">
        <label>Students:
          <input type="number" name="student" value={formData.student || ''} onChange={handleChange} max={50} required />
        </label>
      </div>
      <div className="form-group">
        <label>Fees:
          <input type="number" name="price" value={formData.price || ''} onChange={handleChange} min={1000000} max={10000000} required />
        </label>
      </div>
      <div className="form-group">
        <label>Discount:
          <input type="number" name="sale" value={formData.sale || ''} onChange={handleChange} min={1000000} max={10000000} required />
        </label>
      </div>
      <div className="form-group">
        <label>Instructor:
          <input type="text" name="author" value={formData.author || ''} onChange={handleChange} required />
        </label>
      </div>
      <div className="form-group">
        <label>Course Name:
          <input type="text" name="courseName" value={formData.courseName || ''} onChange={handleChange} required />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit" className="btn-update">Update</button>
        <button type="button" className="btn-cancel" onClick={onClose}>Cancel</button>
      </div>
    </form>
  );
}

export default UpdateCourseForm;
