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
import communication from '../../../ImageVideo/communication.jpg';
import coding from '../../../ImageVideo/coding.jpg';
import powerbi from '../../../ImageVideo/powerbi.jpg';


function Courses() {
    const [courses] = useState([
        {
            id: 1,
            image: courseImage1,
            category: 'Language',
            title: 'Basic Japanese',
            duration: '2 Weeks',
            students: 150,
            level: 'Basic',
            price: '25$',
            lessons: 4,
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
            oldPrice: '$45.00',
            price: '$45.00', /* to ensure the original price will be shown after navigating inside the course info* */
            free : 'Free',
            lessons: 15,
        },
        {
            id: 2,
            image: courseImage2,
            category: 'Business',
            title: 'Introduction to Business',
            duration: '2 Weeks',
            students: 100,
            level: 'All levels',
            price: '25$',
            lessons: 9,
        },
        {
            id: 3,
            image: coding,
            category: 'Coding',
            title: 'Introduction to Coding: HTML, CSS and JavaScripts Basics',
            duration: '8 Weeks',
            author: 'Adoria Duong',
            students: 14,
            level: 'Beginner',
            oldPrice: '$70.00',
            price : '$39.99',
            lessons: 20,
        },
        {
            id: 3,
            image: powerbi,
            category: 'Science',
            title: 'Automating Reports with Power BI: Power Query and DAX',
            duration: '7 Weeks',
            author: 'Adoria Duong',
            students: 3,
            level: 'All levels',
            price: '$82.00',
            lessons: 11,
        },
        {
            id: 3,
            image: courseImage3,
            category: 'Photography',
            title: 'Learn Photography',
            duration: '2 Weeks',
            students: 100,
            level: 'All levels',
            price: '25$',
            lessons: 10,
        },
        {
            id: 2,
            image: communication,
            category: 'Communication',
            title: 'Effective Communication: Unlock Your Potential',
            duration: '8 Weeks',
            author: 'Adoria Duong',
            students: 5,
            level: 'Advanced',
            oldPrice: '$29.00',
            price: '$29.00', /* to ensure the original price will be shown after navigating inside the course info* */
            free : 'Free',
            lessons: 12,
        },
        {
            id: 4,
            image: courseImage4,
            category: 'Finance',
            title: 'Principles of Business Finance',
            duration: '2 Weeks',
            students: 100,
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
            category: 'Art',
            title: 'The Art of Photography',
            duration: '2 Weeks',
            students: 100,
            level: 'Advanced',
            price: '25$',
            lessons: 10,
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
                            <h3 className="ad-course-title-outside">{course.title}</h3>
                            <div className="course-meta">
                                <span><i className="fas fa-clock"></i> {course.duration}</span>
                                <span><i className="fas fa-users"></i> {course.students} Students</span>
                                <span><i className="fas fa-signal"></i> {course.level}</span>
                                <span><i className="fas fa-book"></i> {course.lessons} Lessons</span>
                            </div>
                            <div className="course-footer">
                            <span className="course-price">
    {course.free ? (
        <>
            <span style={{ textDecoration: 'line-through', color: 'gray' }}>{course.oldPrice}</span>{" "}
            <span style={{ color: '#18a52b' }}>{course.free}</span>
        </>
    ) : course.oldPrice ? (
        <>
            <span style={{ textDecoration: 'line-through', color: 'gray' }}>{course.oldPrice}</span>{" "}
            <span style={{ color: '#b8973e' }}>{course.price}</span>
        </>
    ) : (
        <span>{course.price}</span>
    )}
</span>
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
                <span className="page-number-current">1</span>
                <span className="page-number">2</span>
                <span className="page-number">3</span>
                <span className="page-number">4</span>
                <span className="page-number">5</span>
                <span className='ad-page-number-dot'><i class="fa-solid fa-ellipsis"></i></span>
                <span className="page-number">30</span>
                <span className="ad-page-number-next">Next <i class="fa-solid fa-angle-right"></i></span>
            </div>
            
        </div>
    );
}

export default Courses;
