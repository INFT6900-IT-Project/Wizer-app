// Courses.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';
import courseImage1 from '../../../ImageVideo/courseImage1.jpg';
import courseImage2 from '../../../ImageVideo/courseImage2.jpg';
import courseImage3 from '../../../ImageVideo/courseImage3.jpg';
import courseImage4 from '../../../ImageVideo/courseImage4.jpg';
import courseImage5 from '../../../ImageVideo/courseImage5.jpg';
import art from '../../../ImageVideo/art.jpg';
import chinese from '../../../ImageVideo/chinese.jpg';


function Courses() {
    const [courses] = useState([
        {
            id: 1,
            image: courseImage1,
            category: 'Language',
            title: 'Basic Japanese',
            duration: '2 Weeks',
            author: 'Gemma Nguyen',
            students: 25,
            level: 'Basic',
            price: '$25',
            lessons: 12,
        },
        {
            id: 7,
            image: chinese,
            category: 'Language',
            title: 'Business Chinese: Language Skill for the Professional World',
            duration: '5 Weeks',
            author: 'Adoria Duong',
            students: 35,
            level: 'Beginner',
            price: '$45',
            newPrice: 'Free',
            price: (<span style={{ textDecoration: 'line-through', color: 'gray' }}>$45.00</span>),
            newPrice: (<span style={{ color: '#18a52b' }}> Free</span>),
            lessons: 15,
        },
        {
            id: 2,
            image: courseImage2,
            category: 'Business',
            title: 'Introduction to Business',
            duration: '2 Weeks',
            author: 'Gemma Nguyen',
            students: 30,
            level: 'All levels',
            price: '$75',
            lessons: 10,
        },
        {
            id: 3,
            image: courseImage3,
            category: 'Photography',
            title: 'Learn Photography',
            duration: '2 Weeks',
            author: 'Gemma Nguyen',
            students: 33,
            level: 'All levels',
            price: '$65',
            lessons: 8,
        },
        {
            id: 4,
            image: courseImage4,
            category: 'Technology',
            title: 'Introduction to Technology',
            duration: '3 Weeks',
            author: 'Gemma Nguyen',
            students: 45,
            level: 'Beginner',
            price: '$70',
            lessons: 9,
        },
        {
            id: 6,
            image: art,
            category: 'Art',
            title: 'Creating Illustration Telling Stories Through Art',
            duration: '8 Weeks',
            author: 'Adoria Duong',
            students: 5,
            level: 'Advanced',
            price: '$49',
            lessons: 12,
        },
        {
            id: 5,
            image: courseImage5,
            category: 'Design',
            title: 'Learn Web Design',
            author: 'Gemma Nguyen',
            duration: '4 Weeks',
            students: 26,
            level: 'Advanced',
            price: '$85',
            lessons: 15,
        },
    ]);

    return (
        <div className="courses-page">
            <h1>All Courses</h1>
            <div className="search-bar">
                <input type="text" placeholder="Search for a course..." />
                <button><i className="fa fa-search"></i></button>
            </div>
            <div className="courses-grid">
                {courses.map((course) => (
                    <div className="course-card" key={course.id}>
                        <div className="course-image-wrapper">
                            <img src={course.image} alt={course.title} className="course-image" />
                            <span className="course-category">{course.category}</span>
                        </div>
                        <div className="course-content">
                            <p className="course-author">{course.author}</p>
                            <h3 className="course-title">{course.title}</h3>
                            <div className="course-meta">
                                <span><i className="fas fa-clock"></i> {course.duration}</span>
                                <span><i className="fas fa-users"></i> {course.students} Students</span>
                                <span><i className="fas fa-signal"></i> {course.level}</span>
                                <span><i className="fas fa-book"></i> {course.lessons} Lessons</span>
                            </div>
                            <div className="course-footer">
                                <span className="course-price"><span>{course.price}</span>
                                {course.newPrice}</span>
                                <button className="view-more-btn">
                                     <Link to={`/course-detail/${course.id}`} state={{ course }}  style={{ textDecoration: 'none', color:'white' }}>
                                        View More
                                     </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <span className="page-number active">1</span>
                <span className="page-number active">2</span>
                <span className="page-number active">3</span>
                <span className="page-number active">4</span>
                <span className="page-number active">5</span>
            </div>
            
        </div>
    );
}

export default Courses;
