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
import Home from './components/Pages/Home';
import Features from './components/Pages/Features';
import Pricing from './components/Pages/Pricing';
import ContactUs from './components/Pages/ContactUs';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import SignIn from './components/Pages/SignUpIn/SignIn'
import SignUp from './components/Pages/SignUpIn/SignUp';

function App() {
  
  return (

  <div>
    <Router>
      <ScrollToTop>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path="/courses" element={<Courses />} />
        <Route path="/course-detail/:id" element={<CourseDetail />} />
        <Route path="/features" element={<Features />} />
        <Route path="/lesson-detail/hiragana" element={<LessonDetail />} />
        <Route path="/lesson-detail/katakana" element={<KatakanaLesson />} />
      </Routes>
      </ScrollToTop>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;