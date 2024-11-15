import React, { useState } from 'react';
import axios from 'axios';
import './CourseForm.css';

function CourseForm({ onClose }) {
  const [formData, setFormData] = useState({
    img: null, 
    time: '',
    student: '',
    price: '',
    sale: '',
    author: '',
    courseName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      img: e.target.files[0], 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
   
    const uploadData = new FormData();
    uploadData.append('img', formData.img); // append the file
    uploadData.append('time', formData.time);
    uploadData.append('student', formData.student);
    uploadData.append('price', formData.price);
    uploadData.append('sale', formData.sale);
    uploadData.append('author', formData.author);
    uploadData.append('courseName', formData.courseName);

    try {
      const response = await axios.post('http://localhost:3000/api/course-detai/', uploadData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });
      alert('The course has been created:', response.data);
      onClose(); 
    } catch (error) {
      alert('Error creating course:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="course-form">
      <h2 className="form-title">Add New Course</h2>
      <div className="form-group">
        <label>Image:
          <input type="file" name="img" accept="image/*" onChange={handleFileChange} required />
        </label>
      </div>
      <div className="form-group">
        <label>Time: <input type="number" name="time" value={formData.time} onChange={handleChange} max={5} required/></label>
      </div>
      <div className="form-group">
        <label>Students: <input type="number" name="student" value={formData.student} onChange={handleChange} max={50} required/></label>
      </div>
      <div className="form-group">
        <label>Fees: <input type="number" name="price" value={formData.price} onChange={handleChange} min={0} max={200} required/></label>
      </div>
      <div className="form-group">
        <label>Promotion: <input type="number" name="sale" value={formData.sale} onChange={handleChange} min={0} max={200} required/></label>
      </div>
      <div className="form-group">
        <label>Instructor: <input type="text" name="author" value={formData.author} onChange={handleChange} required/></label>
      </div>
      <div className="form-group">
        <label>Course: <input type="text" name="courseName" value={formData.courseName} onChange={handleChange} required/></label>
      </div>
      <div className="form-actions">
        <button type="submit" className="btn-save">Save</button>
        <button type="button" className="btn-cancel" onClick={onClose}>Cancel</button>
      </div>
    </form>
  );
}

export default CourseForm;
