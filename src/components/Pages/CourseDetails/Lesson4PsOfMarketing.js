// LessonWhatIsBusiness.js
import React from 'react';
import './LessonDetail.css';
import QuizComponent8 from './QuizComponent8';

const Lesson4PsOfMarketing = () => {
    const lessonContent = `
        A business is an organization or enterprising entity engaged in commercial, industrial, or professional activities.
        The purpose of a business is to provide goods or services to consumers in order to generate profit and fulfill the 
        needs of society. Businesses play a crucial role in the economy, creating jobs, driving innovation, and contributing 
        to overall economic growth.
    `;

    return (
        <div className="lesson-detail-container">
            <h1>The 4 Ps of Marketing</h1>
            <p className="lesson-content">{lessonContent}</p>

            <h2>1. Produce</h2>
            <p className="lesson-content">
            The product refers to what a business is offering to meet customer needs. It can be a physical item, service, or a combination of both. Businesses must ensure that their product is of high quality, fulfills a need, and stands out from competitors' offerings.
            </p>

            <h2>2. Price</h2>
            <p className="lesson-content">
            Price is the amount customers pay for a product. It reflects the value of the product and can impact customer perceptions. Pricing strategies should consider factors like production costs, competitor pricing, and the target market’s willingness to pay.
            </p>

            <h2>3. Place</h2>
            <p className="lesson-content">
            Place refers to where and how the product is distributed to reach the customer. This could be through physical stores, online platforms, or both. The goal is to make it convenient for the target audience to find and purchase the product.
            </p>
            <h2>4. Promotion </h2>
            <p className="lesson-content">
            Promotion involves all activities that communicate the product’s value and persuade customers to buy it. This includes advertising, sales promotions, public relations, and direct marketing. Effective promotion increases brand awareness and attracts potential customers.
            </p>


            {/* Image Section */}
            <div className="image-container">
                <img
                    src="/ImageVideo/4PsOfMarketing.jpg"
                    alt="The 4 Ps of Marketing"
                    className="lesson-image"
                />
            </div>    

            {/* Quiz Section */}
            <h3>Quiz: Test Your Knowledge</h3>
            <QuizComponent8 />
        </div>
    );
};

export default Lesson4PsOfMarketing;
