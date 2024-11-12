// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Courses from './components/Pages/CourseDetails/Courses';
import CourseDetail from './components/Pages/CourseDetails/CourseDetail'; //Básico de Japonés
import CourseDetail1 from './components/Pages/CourseDetails/CourseDetail1';// Introduction to Business
import CourseDetail2 from './components/Pages/CourseDetails/CourseDetail2';// Learn Photography
import Features from './components/Pages/Features';
import LessonDetail from './components/Pages/CourseDetails/LessonDetail';
import KatakanaLesson from './components/Pages/CourseDetails/KatakanaLesson';
import BasicGreetingsLesson from './components/Pages/CourseDetails/BasicGreetingsLesson';
import NumbersAndCountingLesson from './components/Pages/CourseDetails/NumbersAndCountingLesson';
import './App.css';
import Home from './components/Pages/Home';
import Features from './components/Pages/Features';
import Pricing from './components/Pages/Pricing';
import ContactUs from './components/Pages/ContactUs';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import SignIn from './components/Pages/SignUpIn/SignIn'
import SignUp from './components/Pages/SignUpIn/SignUp';
import ProtectedRoute from './ProtectedRoute';
import Payment from './components/Pages/Payment';



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
        <Route path='/payment' element={<Payment/>}/>
        <Route path="/courses" element={<ProtectedRoute/>} ><Route path="/courses" element={<Courses/>}/></Route>
        {/* <protectedRoute path="/course-detail/:id" element={<CourseDetail />} /> */}
        <Route path="/features" element={<Features />} />

        {/* <protectedRoute path="/lesson-detail/hiragana" element={<LessonDetail />} />
        <protectedRoute path="/lesson-detail/katakana" element={<KatakanaLesson />} /> */}
      </Routes>
      </ScrollToTop>
      <Footer/>
    </Router>
    </div>
  );

    // return (
    //     <div>
    //         <Router>
    //             <Navbar />
    //             <Routes>
    //                 <Route path="/" element={<Home />} />
    //                 <Route path="/courses" element={<Courses />} />
    //                 <Route path="/features" element={<Features />} />
    //                 <Route path="/lesson-detail/hiragana" element={<LessonDetail />} />
    //                 <Route path="/lesson-detail/katakana" element={<KatakanaLesson />} />
    //                 <Route path="/lesson-detail/basic-greetings" element={<BasicGreetingsLesson />} />
    //                 <Route path="/lesson-detail/numbers-and-counting" element={<NumbersAndCountingLesson />} />
    //                 {/* <Route path="/course-detail-business/2" element={<CourseDetailBusiness />} /> */}
    //                 <Route path="/course-detail/:id" element={<CourseDetail />} /> //Básico de Japonés
    //                 <Route path="/course-detail/3" element={<CourseDetail2 />} /> //Learn Photography
    //                 <Route path="/course-detail/2" element={<CourseDetail1 />} /> //Introduction to Business
    //             </Routes>
    //         </Router>
    //     </div>
    // );

}

export default App;
