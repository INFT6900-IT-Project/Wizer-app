// LessonWhatIsBusiness.js
import React from 'react';
import './LessonDetail.css';
import QuizComponent2 from './QuizComponent2';

const LessonWhatIsBusiness = () => {
    const lessonContent = `
        A business is an organization or enterprising entity engaged in commercial, industrial, or professional activities.
        The purpose of a business is to provide goods or services to consumers in order to generate profit and fulfill the 
        needs of society. Businesses play a crucial role in the economy, creating jobs, driving innovation, and contributing 
        to overall economic growth.
    `;

    return (
        <div className="lesson-detail-container">
            <h1>What is a Business?</h1>
            <p className="lesson-content">{lessonContent}</p>

            <h2>Purpose of Business in Society</h2>
            <p className="lesson-content">
                Businesses exist to satisfy the needs and wants of consumers, create value, and improve quality of life by producing 
                goods and services. They also contribute to economic stability by generating employment and fostering competition.
            </p>

            <h2>The Role of Businesses in the Economy</h2>
            <p className="lesson-content">
                Businesses drive the economy by facilitating the exchange of goods and services, promoting economic development, and 
                increasing the standard of living. Through taxation and job creation, they contribute to government revenue and social 
                welfare.
            </p>

            {/* Image Section */}
            <div className="image-container">
                <img
                    src="/ImageVideo/whatabusiness.jpg"
                    alt="What is a Business"
                    className="lesson-image"
                />
            </div>    

            {/* Quiz Section */}
            <h3>Quiz: Test Your Knowledge</h3>
            <QuizComponent2 />
        </div>
    );
};

export default LessonWhatIsBusiness;
