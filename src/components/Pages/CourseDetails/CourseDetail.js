import React, { useState, useEffect, useRef } from "react";
import HeaderCourseDetail from "./HeaderCourseDetail";
import PriceCourseCard from "./PriceCourseCard";
import TabNavigation from "./TabNavigation";
import CommentForm from "./CommentForm";
import Header from "../Components/HomePage/Header";
import Footer from "../Components/HomePage/Footer";
import RegisterCourse from "./RegisterCourse"; 
import { useLocation } from "react-router-dom";
import "./CourseDetail.css";

const CourseDetail = () => {
  const location = useLocation();
  const selectedCourse = location.state?.course;
  const [reviewsData, setReviewsData] = useState([]);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const registrationFormRef = useRef(null);

 
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
      <Header />
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
