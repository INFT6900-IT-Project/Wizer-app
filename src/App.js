import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Courses from './components/Pages/CourseDetails/Courses';
import CourseDetail from './components/Pages/CourseDetails/CourseDetail';
import Features from './components/Pages/Features';
import LessonDetail from './components/Pages/CourseDetails/LessonDetail';
import KatakanaLesson from './components/Pages/CourseDetails/KatakanaLesson';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course-detail/:id" element={<CourseDetail />} />
          <Route path="/features" element={<Features />} />
          <Route path="/lesson-detail/hiragana" element={<LessonDetail />} />
          <Route path="/lesson-detail/katakana" element={<KatakanaLesson />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;