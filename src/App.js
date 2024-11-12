import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CourseDetail from './components/Pages/CourseDetails/CourseDetail';
import LessonDetail from './components/Pages/CourseDetails/LessonDetail';
import KatakanaLesson from './components/Pages/CourseDetails/KatakanaLesson';
import Courses from './components/Pages/CourseDetails/Courses';
import './App.css';
import Home from './components/Pages/Home';
import Features from './components/Pages/Features';
import Pricing from './components/Pages/Pricing';
import ContactUs from './components/Pages/ContactUs';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
<<<<<<< HEAD
import SignIn from './components/Pages/SignUpIn/SignIn'
import SignUp from './components/Pages/SignUpIn/SignUp';
import ProtectedRoute from './ProtectedRoute';
=======
import Payment from './components/Pages/Payment';


>>>>>>> Adoria-test
function App() {
  
  return (

  <div>
    <Router>
      <ScrollToTop>
      <Navbar/>
<<<<<<< HEAD
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        
        <Route path="/courses" element={<ProtectedRoute/>} ><Route path="/courses" element={<Courses/>}/></Route>
        {/* <protectedRoute path="/course-detail/:id" element={<CourseDetail />} /> */}
        <Route path="/features" element={<Features />} />

        {/* <protectedRoute path="/lesson-detail/hiragana" element={<LessonDetail />} />
        <protectedRoute path="/lesson-detail/katakana" element={<KatakanaLesson />} /> */}
      </Routes>
=======
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/features' component={Features}/>
        <Route path='/pricing' component={Pricing}/>
        <Route path='/contact-us' component={ContactUs}/>
        <Route path='/payment' component={Payment}/>
      </Switch>
>>>>>>> Adoria-test
      </ScrollToTop>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;