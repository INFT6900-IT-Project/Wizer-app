// LessonGoodsVsServices.js
import React from 'react';
import './LessonDetail.css';
import QuizComponent6 from './QuizComponent6'; 
// import QuizComponent2 from './QuizComponent2';




const LessonUnderstandingMarketAndCompetition = () => {
    const lessonContent = `
        Understanding the market and competition is essential for any business to succeed. The market consists of potential customers and competitors, and it is important for businesses to identify their target market and analyze the competitive landscape. Key factors include market types, competition levels, market share, and competitive strategies.
    `;

    return (
        <div className="lesson-detail-container">
            <h1>Understanding the Market and Competition</h1>
            <p className="lesson-content">{lessonContent}</p>

            <h2>Market Types</h2>
            <p className="lesson-content">
            Markets can be categorized based on various factors, including product type, geography, and customer demographics. Common market types include local, national, and global markets, as well as niche and mass markets, each offering unique opportunities and challenges for businesses.
            </p>

            <h2>Competition Levels</h2>
            <p className="lesson-content">
            Competition levels vary based on industry and market conditions. They range from monopolies, with a single dominant player, to highly competitive markets with many businesses offering similar products or services. Understanding competition levels helps a business position itself effectively.
            </p>

            <h2>Market Share</h2>
            <p className="lesson-content">
            Market share represents the percentage of total sales a company captures in a particular market. A higher market share often indicates a stronger market position, but increasing market share can be challenging in highly competitive markets.
            </p>

            <h2>Competitive Strategies </h2>
            <p className="lesson-content">
            Businesses use various competitive strategies to succeed, including cost leadership, differentiation, and niche strategies. These approaches help businesses attract customers and achieve a sustainable competitive advantage.
            </p>

            {/* Image Section */}
            <div className="image-container">
                <img
                    src="/ImageVideo/marketandcompetition.jpg"
                    alt="Types of Business Ownership"
                    className="lesson-image"
                />
            </div>    

            {/* Quiz Section */}
            <h3>Quiz: Test Your Knowledge</h3>
            <QuizComponent6 />
        </div>
    );
};




export default LessonUnderstandingMarketAndCompetition;

