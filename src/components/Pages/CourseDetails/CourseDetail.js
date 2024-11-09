import React, { useState, useEffect, useRef } from "react";
import HeaderCourseDetail from "./HeaderCourseDetail";
import PriceCourseCard from "./PriceCourseCard";
import TabNavigation from "./TabNavigation";
import CommentForm from "./CommentForm";
import Footer from '../../Footer';
import RegisterCourse from "./RegisterCourse"; 
import { useLocation, useParams } from "react-router-dom";
import "./CourseDetail.css";

const coursesData = [
    {
      id: 1,
      image: 'path/to/courseImage1.png',
      category: 'Language',
      title: 'Basic Japanese',
      duration: '2 Weeks',
      students: 25,
      level: 'Basic',
      price: '25$',
      sale: 'Discounted Price',
      overview: "This 2-week beginner's course introduces students to the basics of the Japanese language...",
  
    },
   
  ];
  
  const CourseDetail = () => {
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
      <TabNavigation reviewsData={reviewsData} />
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

export default CourseDetail;