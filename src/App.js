// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import Courses from './components/Pages/CourseDetails/Courses';
import CourseDetail from './components/Pages/CourseDetails/CourseDetail';
import Features from './components/Pages/Features';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course-detail/:id" element={<CourseDetail />} /> {/* Ensure this matches */}
          <Route path="/features" element={<Features />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
