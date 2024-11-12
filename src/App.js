// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Courses from './components/Pages/CourseDetails/Courses';
import CourseDetail from './components/Pages/CourseDetails/CourseDetail'; //Básico de Japonés
import CourseDetail1 from './components/Pages/CourseDetails/CourseDetail1';// Introduction to Business
import Features from './components/Pages/Features';
import LessonDetail from './components/Pages/CourseDetails/LessonDetail';
import KatakanaLesson from './components/Pages/CourseDetails/KatakanaLesson';
import BasicGreetingsLesson from './components/Pages/CourseDetails/BasicGreetingsLesson';
import NumbersAndCountingLesson from './components/Pages/CourseDetails/NumbersAndCountingLesson';
import './App.css';


function App() {
  
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/lesson-detail/hiragana" element={<LessonDetail />} />
                    <Route path="/lesson-detail/katakana" element={<KatakanaLesson />} />
                    <Route path="/lesson-detail/basic-greetings" element={<BasicGreetingsLesson />} />
                    <Route path="/lesson-detail/numbers-and-counting" element={<NumbersAndCountingLesson />} />
                    {/* <Route path="/course-detail-business/2" element={<CourseDetailBusiness />} /> */}
                    <Route path="/course-detail/:id" element={<CourseDetail />} />
                 
                    <Route path="/course-detail/2" element={<CourseDetail1 />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
