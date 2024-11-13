// LessonGoodsVsServices.js
import React from 'react';
import './LessonDetail.css';
import QuizComponent4 from './QuizComponent4'; 
// import QuizComponent2 from './QuizComponent2';




const LessonKeyFunctionsOfBusiness = () => {
    const lessonContent = `
        Every business has key functions that are essential to its operations. These core functions include Marketing, Finance, 
        Human Resources, and Operations. Each function plays a critical role in ensuring the business runs efficiently and achieves 
        its goals.
    `;

    return (
        <div className="lesson-detail-container">
            <h1>Key Functions of a Business</h1>
            <p className="lesson-content">{lessonContent}</p>

            <h2>Marketing</h2>
            <p className="lesson-content">
            Marketing is responsible for promoting the business's products or services and connecting with customers. It involves market research, advertising, and customer engagement to drive sales and build brand loyalty.
            </p>

            <h2>Finance</h2>
            <p className="lesson-content">
            Finance manages the business’s money, overseeing budgets, expenses, and investments. It ensures the business remains profitable and has sufficient funds for growth and day-to-day operations.
            </p>

            <h2>Human Resources (HR)</h2>
            <p className="lesson-content">
            Human Resources is focused on managing employees, including hiring, training, and employee development. HR ensures a positive work environment, helps retain talent, and oversees compensation and benefits.
            </p>

            <h2>Operations</h2>
            <p className="lesson-content">
            Operations ensure that the business’s daily activities run smoothly. This function manages production, quality control, supply chain, and logistics, ensuring that products and services are delivered efficiently to customers.
            </p>

            {/* Image Section */}
            <div className="image-container">
                <img
                    src="/ImageVideo/keyfunctions.jpg"
                    alt="What is a Business"
                    className="lesson-image"
                />
            </div>    

            {/* Quiz Section */}
            <h3>Quiz: Test Your Knowledge</h3>
            <QuizComponent4 />
        </div>
    );
};






export default LessonKeyFunctionsOfBusiness;
