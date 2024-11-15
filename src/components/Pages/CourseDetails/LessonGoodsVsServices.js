// LessonGoodsVsServices.js
import React from 'react';
import './LessonDetail.css';
import QuizComponent3 from './QuizComponent3'; 
// import QuizComponent2 from './QuizComponent2';




const LessonGoodsVsServices = () => {
    const lessonContent = `
        Goods and services are the two main types of products offered by businesses to satisfy consumer needs.
        Goods are tangible items that can be seen, touched, and stored, such as food, clothing, and electronics. 
        Services, on the other hand, are intangible activities or benefits provided by one party to another, 
        like healthcare, education, and entertainment.
    `;

    return (
        <div className="lesson-detail-container">
            <h1>Goods vs. Services</h1>
            <p className="lesson-content">{lessonContent}</p>

            <h2>What are Goods?</h2>
            <p className="lesson-content">
            Goods are physical products that can be purchased, owned, and stored. Examples include furniture, cars, electronics, and groceries. These items can be transported and are often durable or consumable, providing value to consumers over time or immediately upon use.
            </p>

            <h2>What are Services?</h2>
            <p className="lesson-content">
            Services are non-physical products that involve the experience or expertise of a provider. 
            Examples include financial advice, medical treatment, legal consultation, and hospitality. 
            Unlike goods, services are consumed at the point of delivery and cannot be stored or owned.
            </p>

            {/* Image Section */}
            <div className="image-container">
                <img
                    src="/ImageVideo/goodsvsservices.jpg"
                    alt="What is a Business"
                    className="lesson-image"
                />
            </div>    

            {/* Quiz Section */}
            <h3>Quiz: Test Your Knowledge</h3>
            <QuizComponent3 />
        </div>
    );
};




// const LessonGoodsVsServices = () => {
//     const lessonContent = `
        
//     `;

//     return (
//         <div className="lesson-detail-container">
//             <h1>Goods vs. Services</h1>
//             <p className="lesson-content">{lessonContent}</p>

//             <h2>What are Goods?</h2>
//             <p className="lesson-content">
//                 Goods are physical products that can be purchased, owned, and stored. Examples include furniture, 
//                 cars, electronics, and groceries. These items can be transported and are often durable or consumable, 
//                 providing value to consumers over time or immediately upon use.
//             </p>

//             <h2>What are Services?</h2>
//             <p className="lesson-content">

//             </p>

//             {/* Image Section */}
//             <div className="image-container">
//                 <img
//                     src="/ImageVideo/goodsvsservices.jpg"
//                     alt="Goods vs. Services"
//                     className="lesson-image"
//                 />
//             </div>    

//             {/* Quiz Section */}
//             <h3>Quiz: Test Your Knowledge</h3>
//             <QuizComponent3 />
//         </div>
//     );
// };

export default LessonGoodsVsServices;
