// LessonWhatIsBusiness.js
import React from 'react';
import './LessonDetail.css';
import QuizComponent9 from './QuizComponent9';

const LessonTargetMarket = () => {
    const lessonContent = `
        A target market is a specific group of potential customers that a business aims to reach with its products or services. Identifying a target market allows businesses to focus their marketing efforts on those most likely to buy, resulting in more effective and efficient marketing strategies.
    `;

    return (
        <div className="lesson-detail-container">
            <h1>Target Market</h1>
            <p className="lesson-content">{lessonContent}</p>

            <h2>Importance of Identifying a Target Market</h2>
            <p className="lesson-content">
            Understanding the target market is crucial for tailoring marketing strategies. By focusing on a specific group, businesses can create messages that resonate with their audience, select appropriate distribution channels, and set prices that match customer expectations.
            </p>

            <h2>Segmentation of Target Market</h2>
            <p className="lesson-content">
            Target markets are often segmented based on demographics, geography, psychographics, and behavior. This segmentation helps businesses to better understand and meet the unique needs of each customer segment.
            </p>

            <h2>Types of Market Segmentation</h2>
            <p className="lesson-content">
                <li><strong>Demographic Segmentation:</strong> Age, gender, income, education level, etc.</li>
                <li><strong>Geographic Segmentation:</strong> Region, country, city, urban or rural areas, etc.</li>
                <li><strong>Psychographic Segmentation:</strong> Lifestyle, personality traits, values, etc.</li>
                <li><strong>Behavioral Segmentation:</strong> Buying habits, brand loyalty, product usage, etc.</li>
            </p>

            {/* Image Section */}
            <div className="image-container">
                <img
                    src="/ImageVideo/targetmarket.jpg"
                    alt="Target Market"
                    className="lesson-image"
                />
            </div>    

            {/* Quiz Section */}
            <h3>Quiz: Test Your Knowledge</h3>
            <QuizComponent9 />
        </div>
    );
};

export default LessonTargetMarket;
