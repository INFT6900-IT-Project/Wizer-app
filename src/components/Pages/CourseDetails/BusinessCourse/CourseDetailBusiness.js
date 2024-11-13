//src\components\Pages\CourseDetails\BusinessCourse\CourseDetailBusiness.js
import React, { useState, useEffect, useRef } from "react";
import HeaderCourseDetailBusiness from './HeaderCourseDetailBusiness';
import PriceCourseCardBusiness from './PriceCourseCardBusiness';
import TabNavigationBusiness from './TabNavigationBusiness';
import CommentFormBusiness from './CommentFormBusiness';
import RegisterCourseBusiness from './RegisterCourseBusiness';
import Footer from '../../../Footer';
import { useLocation, useParams } from "react-router-dom";

import './CourseDetail.css';
import businessImage from '../../../../ImageVideo/courseImage2.jpg'; //src\ImageVideo\courseImage2.jpg


const businessCourseData = {
    id: 2,
    image: businessImage,
    category: 'Business',
    title: 'Introduction to Business',
    duration: '2 Weeks',
    students: 30,
    level: 'All levels',
    price: '25$',
    sale: 'Free (0$)',
    overview: "This 2-week course introduces students to the basics of business concepts, organizational structures, marketing fundamentals, and management principles.",
    lessons: 2,
    quizzes: 2,
};

const CourseDetailBusiness = () => {
    const location = useLocation();
    const { id } = useParams();
    const [reviewsData, setReviewsData] = useState([]);
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);
    const registrationFormRef = useRef(null);

    useEffect(() => {
        const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
        setReviewsData(savedComments);
    }, []);

    const addComment = (newReview) => {
        const updatedReviews = [...reviewsData, newReview];
        setReviewsData(updatedReviews);
        localStorage.setItem("comments", JSON.stringify(updatedReviews));
    };

    const handleGetNowClick = () => {
        setShowRegistrationForm(true);
        setTimeout(() => {
            registrationFormRef.current.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    return (
        <>
            <HeaderCourseDetailBusiness course={businessCourseData} />
            <PriceCourseCardBusiness course={businessCourseData} onGetNow={handleGetNowClick} />
            <TabNavigationBusiness reviewsData={reviewsData} data={businessCourseData.curriculum} />
            <CommentFormBusiness addComment={addComment} />
            {showRegistrationForm && (
                <div ref={registrationFormRef}>
                    <RegisterCourseBusiness course={businessCourseData} />
                </div>
            )}
            <Footer />
        </>
    );
};

export default CourseDetailBusiness;