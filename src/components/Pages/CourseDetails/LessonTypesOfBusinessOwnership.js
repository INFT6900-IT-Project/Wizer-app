// LessonGoodsVsServices.js
import React from 'react';
import './LessonDetail.css';
import QuizComponent5 from './QuizComponent5'; 
// import QuizComponent2 from './QuizComponent2';




const LessonTypesOfBusinessOwnership = () => {
    const lessonContent = `
        There are several types of business ownership, each with unique characteristics, advantages, and disadvantages. The main types include Sole Proprietorship, Partnership, Corporation, and Limited Liability Company (LLC).
        Choosing the right ownership type depends on factors such as the number of owners, liability, tax structure, and management style.
    `;

    return (
        <div className="lesson-detail-container">
            <h1>Types of Business Ownership</h1>
            <p className="lesson-content">{lessonContent}</p>

            <h2>Sole Proprietorship</h2>
            <p className="lesson-content">
            A sole proprietorship is a business owned and operated by a single individual. It’s the simplest form of business ownership with minimal regulatory requirements. However, the owner has unlimited personal liability for business debts and obligations
            </p>

            <h2>Partnership</h2>
            <p className="lesson-content">
            A partnership involves two or more people who share ownership of a business. Partnerships allow shared responsibility, resources, and skills but also involve shared liability. Partnerships can be general or limited.
            </p>

            <h2>Corporation</h2>
            <p className="lesson-content">
            A corporation is a separate legal entity from its owners, providing limited liability protection. Owners, known as shareholders, are not personally liable for business debts. However, corporations are subject to double taxation on profits and have more regulatory requirements.
            </p>

            <h2>Limited Liability Company (LLC)</h2>
            <p className="lesson-content">
            An LLC combines the limited liability features of a corporation with the tax benefits and operational flexibility of a partnership. Owners, known as members, are protected from personal liability, and profits are passed directly to them, avoiding corporate taxes.
            </p>

            {/* Image Section */}
            <div className="image-container">
                <img
                    src="/ImageVideo/typesofownership.jpg"
                    alt="Types of Business Ownership"
                    className="lesson-image"
                />
            </div>    

            {/* Quiz Section */}
            <h3>Quiz: Test Your Knowledge</h3>
            <QuizComponent5 />
        </div>
    );
};






export default LessonTypesOfBusinessOwnership;
