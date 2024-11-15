// LessonWhatIsBusiness.js
import React from 'react';
import './LessonDetail.css';
import QuizComponent10 from './QuizComponent10';

const LessonImportanceOfFinance = () => {
    const lessonContent = `
        Finance is a critical function in any business as it helps manage the company's resources to achieve its goals. It involves planning, acquiring, and controlling funds to ensure the business operates smoothly and can grow over time. Effective financial management enables businesses to make informed decisions, manage risks, and maintain profitability.
    `;

    return (
        <div className="lesson-detail-container">
            <h1>Importance of Finance in Business</h1>
            <p className="lesson-content">{lessonContent}</p>

            <h2>Role of Finance in Business Operations</h2>
            <p className="lesson-content">
            Finance is essential for day-to-day business operations, including paying employees, purchasing supplies, and managing cash flow. Proper financial management ensures that the business has enough resources to meet its obligations and avoid liquidity issues.
            </p>

            <h2>Supporting Business Growth</h2>
            <p className="lesson-content">
            Finance is essential for day-to-day business operations, including paying employees, purchasing supplies, and managing cash flow. Proper financial management ensures that the business has enough resources to meet its obligations and avoid liquidity issues.
            </p>

            <h2>Risk Management</h2>
            <p className="lesson-content">
            Finance helps businesses manage risks by setting aside funds for emergencies and making strategic investments. It also involves analyzing financial risks associated with different business activities to make informed decisions and ensure long-term sustainability.
            </p>

            {/* Image Section */}
            <div className="image-container">
                <img
                    src="/ImageVideo/importanceoffinance.jpg"
                    alt="Importance of Finance in Business"
                    className="lesson-image"
                />
            </div>    

            {/* Quiz Section */}
            <h3>Quiz: Test Your Knowledge</h3>
            <QuizComponent10 />
        </div>
    );
};

export default LessonImportanceOfFinance;
