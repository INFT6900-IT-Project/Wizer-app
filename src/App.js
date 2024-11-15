// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Courses from './components/Pages/CourseDetails/Courses';
import CourseDetail from './components/Pages/CourseDetails/CourseDetail';
import CourseDetail1 from './components/Pages/CourseDetails/CourseDetail1';
import CourseDetail2 from './components/Pages/CourseDetails/CourseDetail2';
import LessonDetail from './components/Pages/CourseDetails/LessonDetail';
import KatakanaLesson from './components/Pages/CourseDetails/KatakanaLesson';
import BasicGreetingsLesson from './components/Pages/CourseDetails/BasicGreetingsLesson';
import NumbersAndCountingLesson from './components/Pages/CourseDetails/NumbersAndCountingLesson';
import LessonWhatIsBusiness from './components/Pages/CourseDetails/LessonWhatIsBusiness';
import LessonGoodsVsServices from './components/Pages/CourseDetails/LessonGoodsVsServices';
import LessonKeyFunctionsOfBusiness from './components/Pages/CourseDetails/LessonKeyFunctionsOfBusiness';
import LessonTypesOfBusinessOwnership from './components/Pages/CourseDetails/LessonTypesOfBusinessOwnership';
import LessonUnderstandingMarketAndCompetition from './components/Pages/CourseDetails/LessonUnderstandingMarketAndCompetition';
import LessonWhatIsMarketing from './components/Pages/CourseDetails/LessonWhatIsMarketing';
import Lesson4PsOfMarketing from './components/Pages/CourseDetails/Lesson4PsOfMarketing';
import LessonTargetMarket from './components/Pages/CourseDetails/LessonTargetMarket';
import LessonImportanceOfFinance from './components/Pages/CourseDetails/LessonImportanceOfFinance';
import LessonUnderstandingYourCamera from './components/Pages/CourseDetails/LessonUnderstandingYourCamera';
import LessonExposureTriangleBasics from './components/Pages/CourseDetails/LessonExposureTriangleBasics';
import LessonApertureDepthOfField from './components/Pages/CourseDetails/LessonApertureDepthOfField';
import LessonShutterSpeedMotionControl from './components/Pages/CourseDetails/LessonShutterSpeedMotionControl';
import LessonISONoise from './components/Pages/CourseDetails/LessonISONoise';
import LessonExposureTriangleAssignment from './components/Pages/CourseDetails/LessonExposureTriangleAssignment';
import LessonIntroductionToComposition from './components/Pages/CourseDetails/LessonIntroductionToComposition';
import LessonLeadingLinesAndFramingTechniques from './components/Pages/CourseDetails/LessonLeadingLinesAndFramingTechniques';
import LessonUnderstandingNaturalAndArtificialLight from './components/Pages/CourseDetails/LessonUnderstandingNaturalAndArtificialLight';
import LessonCompositionLightingAssignment from './components/Pages/CourseDetails/LessonCompositionLightingAssignment';


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

import NavBarUser from './components/Pages/User/UserComponents/NavBarUser';





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
            <Route exact path='/user-screen/*' element={<UserScreen />} />
            
            {/* <Route path='/user-dash-board' element={<UserDashboard />} /> */}
            

            {/* Elias */}
            {/* <protectedRoute path="/course-detail/:id" element={<CourseDetail />} /> */}
            {/* <Route path="/courses" element={<ProtectedRoute/>} ><Route path="/courses" element={<Courses/>}/></Route> */}
            {/* <protectedRoute path="/lesson-detail/hiragana" element={<LessonDetail />} />
        <protectedRoute path="/lesson-detail/katakana" element={<KatakanaLesson />} /> */}

            {/* <Route path="/courses" element={<Courses />} /> */}
            <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/lesson-detail/hiragana" element={<LessonDetail />} />
                    <Route path="/lesson-detail/katakana" element={<KatakanaLesson />} />
                    <Route path="/lesson-detail/basic-greetings" element={<BasicGreetingsLesson />} />
                    <Route path="/lesson-detail/numbers-and-counting" element={<NumbersAndCountingLesson />} />
                    <Route path="/lesson-detail/what-is-a-business" element={<LessonWhatIsBusiness />} />
                    {/* <Route path="/lesson-detail/goods-vs-services" element={<LessonGoodsVsServices />} /> */}
                    <Route path="/lesson-detail/goods-vs-services" element={<LessonGoodsVsServices />} />
                    {/* <Link to="/lesson-detail/key-functions-of-a-business">{lesson.name}</Link>   */}
                    {/* <Link to="/lesson-detail/types-of-business-ownership">{lesson.name}</Link>      */}
                    {/* <Link to="/lesson-detail/understanding-the-market-and-competition">{lesson.name}</Link>   */}
                    <Route path="/lesson-detail/understanding-the-market-and-competition" element={<LessonUnderstandingMarketAndCompetition />} />
                    <Route path="/lesson-detail/what-is-marketing" element={<LessonWhatIsMarketing />} />
                    <Route path="/lesson-detail/the-4-Ps-of-marketing" element={<Lesson4PsOfMarketing />} />
                    <Route path="/lesson-detail/target-market" element={<LessonTargetMarket />} />
                    <Route path="/lesson-detail/types-of-business-ownership" element={<LessonTypesOfBusinessOwnership />} />
                    <Route path="/lesson-detail/key-functions-of-a-business" element={<LessonKeyFunctionsOfBusiness />} />
                    <Route path="/lesson-detail/importance-of-finance-in-business" element={<LessonImportanceOfFinance />} />
                    <Route path='/lesson-detail/understanding-your-camera' element={<LessonUnderstandingYourCamera />} />
                    <Route path="/lesson-detail/practical-assignment-composition-and-lighting" element={<LessonCompositionLightingAssignment />} />
                    
                    {/* lesson.name.trim() === "Understanding Natural and Artificial Light" ? ( 
                    <Link to="/lesson-detail/understanding-natural-and-artificial-light">{lesson.name}</Link>  */}
                    
                    <Route path="/lesson-detail/understanding-natural-and-artificial-light" element={<LessonUnderstandingNaturalAndArtificialLight />} />
                    <Route path="/lesson-detail/leading-limes-and-framing-techniques" element={<LessonLeadingLinesAndFramingTechniques />} />
                    <Route path="/lesson-detail/introduction-to-composition" element={<LessonIntroductionToComposition />} />
                    <Route path='/lesson-detail/practical-assignment-exposure-triangle-in-action' element={<LessonExposureTriangleAssignment />} />
                    <Route path="/lesson-detail/iso-and-noise" element={<LessonISONoise />} />
                    <Route path="/lesson-detail/shutter-speed-for-motion-control" element={<LessonShutterSpeedMotionControl />} />
                    <Route path="/lesson-detail/aperture-depth-of-field" element={<LessonApertureDepthOfField />} />
                    <Route path="/lesson-detail/exposure-triangle-basic" element={<LessonExposureTriangleBasics />} />
                    <Route path="/course-detail/:id" element={<CourseDetail />} /> {/* Básico de Japonés */}
                    <Route path="/course-detail/3" element={<CourseDetail2 />} /> {/* Learn Photography */}
                    <Route path="/course-detail/2" element={<CourseDetail1 />} /> {/* Introduction to Business */}
                    <Route path="/course-detail/4" element={<CourseDetail1 />} /> {/* Principles of Business Finance*/}
                    <Route path="/course-detail/5" element={<CourseDetail2 />} /> {/* The Art of Photography*/}

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
console.log("Navbar:", Navbar);
console.log("Home:", Home);
console.log("Courses:", Courses);
console.log("CourseDetail:", CourseDetail);
console.log("CourseDetail1:", CourseDetail1);
console.log("CourseDetail2:", CourseDetail2);
console.log("Features:", Features);
console.log("LessonDetail:", LessonDetail);
console.log("KatakanaLesson:", KatakanaLesson);
console.log("BasicGreetingsLesson:", BasicGreetingsLesson);
console.log("NumbersAndCountingLesson:", NumbersAndCountingLesson);
console.log("LessonWhatIsBusiness:", LessonWhatIsBusiness);
console.log("LessonGoodsVsServices:", LessonGoodsVsServices);
console.log("LessonKeyFunctionsOfBusiness:", LessonKeyFunctionsOfBusiness);
console.log("LessonTypesOfBusinessOwnership:", LessonTypesOfBusinessOwnership);
console.log("LessonUnderstandingMarketAndCompetition:", LessonUnderstandingMarketAndCompetition);
console.log("Lesson4PsOfMarketing:", Lesson4PsOfMarketing);
console.log("LessonTargetMarket:", LessonTargetMarket);
console.log("LessonImportanceOfFinance:", LessonImportanceOfFinance);
console.log("LessonUnderstandingYourCamera:", LessonUnderstandingYourCamera);
console.log("LessonExposureTriangleBasics:", LessonExposureTriangleBasics);
console.log("LessonApertureDepthOfField:", LessonApertureDepthOfField);
console.log("LessonShutterSpeedMotionControl:", LessonShutterSpeedMotionControl);
console.log("LessonISONoise:", LessonISONoise);
console.log("LessonExposureTriangleAssignment:", LessonExposureTriangleAssignment);
console.log("LessonIntroductionToComposition:", LessonIntroductionToComposition);
console.log("LessonLeadingLinesAndFramingTechniques:", LessonLeadingLinesAndFramingTechniques);
console.log("LessonUnderstandingNaturalAndArtificialLight:", LessonUnderstandingNaturalAndArtificialLight);





export default App;
