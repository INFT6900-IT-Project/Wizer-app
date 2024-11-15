// LessonWhatIsBusiness.js
import React from 'react';
import './LessonDetail.css';
import QuizComponent7 from './QuizComponent7';

const LessonWhatIsMarketing = () => {
    const lessonContent = `
        Marketing is the process of promoting, selling, and distributing a product or service. It involves understanding customer needs, creating value, and building strong customer relationships. The goal of marketing is to attract and retain customers by delivering products and services that meet their needs and wants.
    `;

    return (
        <div className="lesson-detail-container">
            <h1>What is Marketing?</h1>
            <p className="lesson-content">{lessonContent}</p>

            <h2>Key Aspects of Marketing</h2>
            <p className="lesson-content">
            Marketing involves various activities, including market research, product development, branding, pricing, advertising, and sales. By understanding and responding to customer needs, marketing helps businesses create value and build loyalty among their target audience.
            </p>

            <h2>Importance of Marketing</h2>
            <p className="lesson-content">
            Effective marketing is essential for a business to succeed in a competitive environment. It drives brand awareness, helps reach new customers, and fosters long-term relationships. Marketing also enables businesses to differentiate themselves from competitors and adapt to changes in the market.
            </p>

            {/* Image Section */}
            <div className="image-container">
                <img
                    src="/ImageVideo/whatismarketing.jpg"
                    alt="What is Marketing"
                    className="lesson-image"
                />
            </div>    

            {/* Quiz Section */}
            <h3>Quiz: Test Your Knowledge</h3>
            <QuizComponent7 />
        </div>
    );
};

export default LessonWhatIsMarketing;
