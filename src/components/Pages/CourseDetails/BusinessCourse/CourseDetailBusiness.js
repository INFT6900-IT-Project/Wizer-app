//src\components\Pages\CourseDetails\BusinessCourse\CourseDetailBusiness.js
import React, { useState, useEffect, useRef } from "react";
import HeaderCourseDetailBusiness from './HeaderCourseDetailBusiness';
import PriceCourseCardBusiness from './PriceCourseCardBusiness';
import TabNavigationBusiness from './TabNavigationBusiness';
import CommentFormBusiness from './CommentFormBusiness';
import RegisterCourseBusiness from './RegisterCourseBusiness';
import Footer from '../../../Footer';


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
    curriculum: [
        {
            title: "Module 1: Business Fundamentals",
            lessons: [
                { name: "Introduction to Business Concepts", time: "15:00", preview: true },
                { name: "Types of Business Organizations", time: "20:00", preview: false }
            ],
            totalLessons: 2,
            totalTime: "35:00 Mins",
            quizzes: [
                {
                    title: "Quiz: Business Concepts",
                    questions: [
                        { question: "What is the primary goal of most businesses?", options: ["Profit", "Expansion", "Market share", "Branding"], answer: "Profit" },
                        { question: "Which is NOT a type of business organization?", options: ["Corporation", "Sole proprietorship", "Community group", "Partnership"], answer: "Community group" }
                    ]
                }
            ]
        },
        {
            title: "Module 2: Marketing & Management",
            lessons: [
                { name: "Basics of Marketing", time: "18:00", preview: true },
                { name: "Introduction to Management", time: "25:00", preview: false }
            ],
            totalLessons: 2,
            totalTime: "43:00 Mins",
            quizzes: [
                {
                    title: "Quiz: Marketing and Management",
                    questions: [
                        { question: "What is the '4P's of Marketing?", options: ["Product, Price, Place, Promotion", "Product, People, Price, Position", "Price, Place, Product, People", "Place, Product, Position, Promotion"], answer: "Product, Price, Place, Promotion" },
                        { question: "Which is a key function of management?", options: ["Marketing", "Planning", "Financing", "Branding"], answer: "Planning" }
                    ]
                }
            ]
        }
    ]
};

const CourseDetailBusiness = () => {
 
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