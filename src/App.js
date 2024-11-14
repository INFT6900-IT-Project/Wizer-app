// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Courses from './components/Pages/CourseDetails/Courses';
import CourseDetail from './components/Pages/CourseDetails/CourseDetail'; //Básico de Japonés
import CourseDetail1 from './components/Pages/CourseDetails/CourseDetail1';// Introduction to Business
import CourseDetail2 from './components/Pages/CourseDetails/CourseDetail2';// Learn Photography
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
import Payment from './components/Pages/Payment';
import { useState,useEffect } from 'react';
import verifyToken from './api/verifyToken';
import SignOut from './components/Pages/SignUpIn/SignOut';
import UserScreen from './components/Pages/User/UserScreen';
import UserHome from './components/Pages/User/UserComponents/UserHome';
import NavBarUser from './components/Pages/User/UserComponents/NavBarUser';
import UserDashboard from './components/Pages/User/UserComponents/UserDashboard';



function App() {
  const [auth, setAuth] = useState(null); // Use null initially to indicate loading state

  useEffect(() => {
      const checkAuth = async () => {
          const isAuthenticated = await verifyToken();
          setAuth(isAuthenticated);
      };

      checkAuth();
  }, []);

  return (

    <div>

      {auth?
      <Router>
        <ScrollToTop>
         <NavBarUser />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route exact path='/sign-out' element={<SignOut/>} />
            <Route path='/features' element={<Features />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/payment' element={<Payment />} />


{/* USER SCREEN */}
            <Route path='/user-screen' element={<UserScreen />} />
            <Route path='/user-home' element={<UserHome />} />
            <Route path='/user-dash-board' element={<UserDashboard />} />

            {/* Elias */}
            {/* <protectedRoute path="/course-detail/:id" element={<CourseDetail />} /> */}
            {/* <Route path="/courses" element={<ProtectedRoute/>} ><Route path="/courses" element={<Courses/>}/></Route> */}
            {/* <protectedRoute path="/lesson-detail/hiragana" element={<LessonDetail />} />
        <protectedRoute path="/lesson-detail/katakana" element={<KatakanaLesson />} /> */}

            <Route path="/courses" element={<Courses />} />
            <Route path="/lesson-detail/hiragana" element={<LessonDetail />} />
            <Route path="/lesson-detail/katakana" element={<KatakanaLesson />} />
            <Route path="/lesson-detail/basic-greetings" element={<BasicGreetingsLesson />} />
            <Route path="/lesson-detail/numbers-and-counting" element={<NumbersAndCountingLesson />} />

            <Route path="/course-detail/:id" element={<CourseDetail />} />        //Básico de Japonés
            <Route path="/course-detail/3" element={<CourseDetail2 />} /> //Learn Photography
            <Route path="/course-detail/2" element={<CourseDetail1 />} /> //Introduction to Business


          </Routes>
        </ScrollToTop>
        <Footer />
      </Router>
      
      : 




      <Router>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/features' element={<Features />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/payment' element={<Payment />} />


          {/* Elias */}
          {/* <protectedRoute path="/course-detail/:id" element={<CourseDetail />} /> */}
          {/* <Route path="/courses" element={<ProtectedRoute/>} ><Route path="/courses" element={<Courses/>}/></Route> */}
          {/* <protectedRoute path="/lesson-detail/hiragana" element={<LessonDetail />} />
      <protectedRoute path="/lesson-detail/katakana" element={<KatakanaLesson />} /> */}


        </Routes>
      </ScrollToTop>
      <Footer />
    </Router>}
    </div>
  );


}

export default App;
