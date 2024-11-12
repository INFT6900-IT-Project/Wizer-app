//Learn Photography

import React, { useState, useEffect, useRef } from "react";
import HeaderCourseDetail from "./HeaderCourseDetail";
import PriceCourseCard from "./PriceCourseCard";
import CommentForm from "./CommentForm";
import Footer from '../../Footer';
import RegisterCourse from "./RegisterCourse"; 
import { useLocation, useParams } from "react-router-dom";
import "./CourseDetail.css";
import TabNavigation2 from "./TabNavigation2";

const coursesData = [
    {
      id: 3,
      image: 'path/to/courseImage3.png',
      category: 'Photography',
      title: 'Learn Photography ',
      duration: '2 Weeks',
      students: 100,
      level: 'Basic',
      price: '25$',
      sale: 'Free (0$)',
      overview: "This 2-week course introduces students to the basics of business concepts, organizational structures, marketing fundamentals, and management principles.",
  
    },
   
  ];
  
  const CourseDetail2 = () => {
    const location = useLocation();
    const { id } = useParams();
    const [selectedCourse, setSelectedCourse] = useState(location.state?.course);
    const [reviewsData, setReviewsData] = useState([]);
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);
    const registrationFormRef = useRef(null);
  
    
    useEffect(() => {
      if (!selectedCourse) {
        console.log("Fetching course data for ID:", id);
        const fetchedCourse = coursesData.find(course => course.id === parseInt(id));
        setSelectedCourse(fetchedCourse);
      } else {
        console.log("Course data:", selectedCourse); 
      }
    }, [id, selectedCourse]);
  
  
  
      useEffect(() => {
        const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
        setReviewsData(savedComments);
      }, []);
    
      const addComment = (newReview) => {
        setReviewsData((prevReviews) => [...prevReviews, newReview]);
        localStorage.setItem("comments", JSON.stringify([...reviewsData, newReview]));
      };
    
      const handleGetNowClick = () => {
        setShowRegistrationForm(true);
        setTimeout(() => {
          registrationFormRef.current.scrollIntoView({ behavior: "smooth" });
        }, 100);
      };
    

  return (
    <>
    
      <HeaderCourseDetail course={selectedCourse} />
      <PriceCourseCard course={selectedCourse} onGetNow={handleGetNowClick} />
      <TabNavigation2 reviewsData={reviewsData} />
      <CommentForm addComment={addComment} />
      {showRegistrationForm && (
        <div ref={registrationFormRef}>
          <RegisterCourse course={selectedCourse} />
        </div>
      )}
      <Footer />
    </>
  );
};

export default CourseDetail2;