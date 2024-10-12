import React, { useState } from 'react';
import './Courses.css';
import courseImage1 from '../../ImageVideo/courseImage1.jpg'; // Replace with actual path
import courseImage2 from '../../ImageVideo/courseImage2.jpg'; // Replace with actual path
import courseImage3 from '../../ImageVideo/courseImage3.jpg'; // Add your other images
import courseImage4 from '../../ImageVideo/courseImage4.jpg'; // Add your other images
import courseImage5 from '../../ImageVideo/courseImage5.jpg'; // Add your other images

import Footer from '../Footer';  // Footer is imported but not used, let's use it now.

function Courses() {
    const [courses] = useState([
        {
            id: 1,
            image: courseImage1,
            category: 'Photography',
            title: 'Create An LMS Website With LearnPress',
            duration: '2 Weeks',
            students: 25,
            level: 'All levels',
            lessons: 20,
            price: 'Free',
        },
        {
            id: 2,
            image: courseImage2,
            category: 'Photography',
            title: 'Amazing Themes by Thimpress',
            duration: '2 Weeks',
            students: 30,
            level: 'All levels',
            lessons: 20,
            price: 'Free',
        },
        {
            id: 3,
            image: courseImage3,
            category: 'Photography',
            title: 'Learn Photography',
            duration: '2 Weeks',
            students: 33,
            level: 'All levels',
            lessons: 20,
            price: 'Free',
        },
        {
            id: 4,
            image: courseImage4,
            category: 'Technology',
            title: 'Introduction to Technology',
            duration: '3 Weeks',
            students: 45,
            level: 'Beginner',
            lessons: 30,
            price: 'Free',
        },
        {
            id: 5,
            image: courseImage5,
            category: 'Design',
            title: 'Learn Web Design',
            duration: '4 Weeks',
            students: 26,
            level: 'Advanced',
            lessons: 40,
            price: 'Free',
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
                        <img src={course.image} alt={course.title} />
                        <div className="course-info">
                            <p className="course-category">{course.category}</p>
                            <h3>{course.title}</h3>
                            <div className="course-meta">
                                <span>{course.duration}</span>
                                <span>{course.students} Students</span>
                                <span>{course.level}</span>
                                <span>{course.lessons} Lessons</span>
                            </div>
                            <div className="course-footer">
                                <span className="course-price">{course.price}</span>
                                <button className="view-more-btn">View More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <span className="page-number active">1</span>
                <span className="page-number">2</span>
                <span className="page-number">3</span>
            </div>

            {/* Add Footer here */}
            <Footer />
        </div>
    );
}

export default Courses;
