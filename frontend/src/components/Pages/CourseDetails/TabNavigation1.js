import React, { useState } from 'react';
import Curriculum from './Curriculum';
import Instructor from './Instructor';
import Reviews from './Reviews';
import FAQs from './FAQs';
import './TabNavigation.css';

const curriculumData = [
    {
        title: "Module 1: Business Fundamentals",
        lessons: [
            { name: "What is a Business?", content: "Definition of business and its purpose in society. The role of businesses in the economy.", preview: true },
            { name: "Goods vs. Services", content: "Differences between goods and services. Examples of businesses that provide goods and services.", preview: true },
            { name: "Key Functions of a Business", content: "Overview of main functions: Marketing, Finance, Human Resources, Operations." },
            { name: "Types of Business Ownership", content: "Different business ownerships like Sole Proprietorship, Partnership, Corporation, LLC." },
            { name: "Understanding the Market and Competition", content: "Market types, competition, market share, and competitive strategies." }
        ],
        totalLessons: 5,
        quizzes: [
            {
                title: "Quiz: Introduction to Business and Business Ownership",
                questions: [
                    { question: "What is the primary purpose of a business in society?", options: ["a) To provide employment", "b) To generate profit", "c) To produce goods and services to satisfy consumer needs", "d) To pay taxes"], answer: "c" },
                    { question: "Which best describes the role of businesses in the economy?", options: ["a) Only provide jobs", "b) Drive economic growth by producing goods, creating jobs, generating wealth", "c) Exist to compete with government", "d) Don't affect the economy significantly"], answer: "b" },
                    { question: "What is the key difference between goods and services?", options: ["a) Goods are intangible, services are tangible", "b) Goods are tangible, services are intangible", "c) Both are tangible", "d) Goods are by businesses, services by government"], answer: "b" },
                    { question: "Which is an example of a business that provides a service?", options: ["a) Bakery", "b) Software company with cloud services", "c) Clothing manufacturer", "d) Smartphone producer"], answer: "b" },
                    { question: "Which is NOT a main function of a business?", options: ["a) Marketing", "b) Finance", "c) Human Resources", "d) Environmental Protection"], answer: "d" }
                ]
            }
        ]
    },
    {
        title: "Module 2: Business Fundamentals 2",
        lessons: [
            { name: "What is Marketing?", content: "Definition and role of marketing in business.", preview: true },
            { name: "The 4 Ps of Marketing", content: "Product, Price, Place, Promotion." },
            { name: "Target Market", content: "Identifying and segmenting target audiences." },
            { name: "Importance of Finance in Business", content: "Role of finance in business operations and growth." },
            { name: "Basic Financial Statements", content: "Income statement, balance sheet, and cash flow statement." },
            { name: "Role of Human Resources (HR)", content: "HR's role in recruitment, training, and management." }
        ],
        totalLessons: 6,
        quizzes: [
            {
                title: "Quiz: Business Fundamentals 2 – Marketing, Finance, and HR",
                questions: [
                    { question: "What is the primary role of marketing in a business?", options: ["a) Handle employee relations", "b) Manage finances", "c) Promote and sell products to meet customer needs", "d) Oversee day-to-day operations"], answer: "c" },
                    { question: "Which is NOT one of the 4 Ps of marketing?", options: ["a) Product", "b) Promotion", "c) Profit", "d) Place"], answer: "c" },
                    { question: "What is a target market?", options: ["a) A specific group of potential customers", "b) Competitor’s customer base", "c) All companies in industry", "d) Region of production"], answer: "a" },
                    { question: "Which describes the importance of finance in business?", options: ["a) Only for large corporations", "b) Ensures business operations and growth", "c) Employee satisfaction", "d) Track profits and losses"], answer: "b" },
                    { question: "Which statement provides a snapshot of a company's financial position?", options: ["a) Cash flow", "b) Income statement", "c) Balance sheet", "d) Budget report"], answer: "c" }
                ]
            }
        ]
    }
];

// Define the Overview component inline within TabNavigation1
const Overview = () => (
    <div>
        <p>
            This 2-week course introduces students to the fundamental concepts of business, providing a foundation for understanding the key components of business operations, management, and entrepreneurship. The course covers topics such as business structures, marketing, finance, human resource management, and business ethics. By the end of the course, students will have a basic understanding of how businesses operate and the role they play in the economy.
        </p>
    </div>
);

const TabNavigation1 = ({ reviewsData }) => {
    const [activeTab, setActiveTab] = useState('overview');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'overview':
                return <Overview />;
            case 'curriculum':
                return <Curriculum data={curriculumData} />;
            case 'instructor':
                return <Instructor />;
            case 'reviews':
                return <Reviews reviewsData={reviewsData} />;
            case 'faqs':
                return <FAQs />;
            default:
                return null;
        }
    };

    return (
        <div className="tab-container">
            <div className="tabs">
                {['overview', 'curriculum', 'instructor', 'faqs', 'reviews'].map(tab => (
                    <button
                        key={tab}
                        className={activeTab === tab ? 'active' : ''}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {renderTabContent()}
            </div>
        </div>
    );
};

export default TabNavigation1;


// import React, { useState, useEffect } from 'react';
// import Curriculum from './Curriculum';
// import Instructor from './Instructor';
// import Reviews from './Reviews';
// import Overview from './Overview';
// import FAQs from './FAQs';
// import './TabNavigation.css'; 




// const curriculumData = [
//     {
//         title: "Module 1: Business Fundamentals",
//         lessons: [
//             { name: "What is a Business?", content: "Definition of business and its purpose in society. The role of businesses in the economy.", preview: true },
//             { name: "Goods vs. Services", content: "Differences between goods and services. Examples of businesses that provide goods and services.", preview: true },
//             { name: "Key Functions of a Business", content: "Overview of main functions: Marketing, Finance, Human Resources, Operations." },
//             { name: "Types of Business Ownership", content: "Different business ownerships like Sole Proprietorship, Partnership, Corporation, LLC." },
//             { name: "Understanding the Market and Competition", content: "Market types, competition, market share, and competitive strategies." }
//         ],
//         totalLessons: 5,
//         quizzes: [
//             {
//                 title: "Quiz: Introduction to Business and Business Ownership",
//                 questions: [
//                     { question: "What is the primary purpose of a business in society?", options: ["a) To provide employment", "b) To generate profit", "c) To produce goods and services to satisfy consumer needs", "d) To pay taxes"], answer: "c" },
//                     { question: "Which best describes the role of businesses in the economy?", options: ["a) Only provide jobs", "b) Drive economic growth by producing goods, creating jobs, generating wealth", "c) Exist to compete with government", "d) Don't affect the economy significantly"], answer: "b" },
//                     { question: "What is the key difference between goods and services?", options: ["a) Goods are intangible, services are tangible", "b) Goods are tangible, services are intangible", "c) Both are tangible", "d) Goods are by businesses, services by government"], answer: "b" },
//                     { question: "Which is an example of a business that provides a service?", options: ["a) Bakery", "b) Software company with cloud services", "c) Clothing manufacturer", "d) Smartphone producer"], answer: "b" },
//                     { question: "Which is NOT a main function of a business?", options: ["a) Marketing", "b) Finance", "c) Human Resources", "d) Environmental Protection"], answer: "d" }
//                 ]
//             }
//         ]
//     },
//     {
//         title: "Module 2: Business Fundamentals 2",
//         lessons: [
//             { name: "What is Marketing?", content: "Definition and role of marketing in business.", preview: true },
//             { name: "The 4 Ps of Marketing", content: "Product, Price, Place, Promotion." },
//             { name: "Target Market", content: "Identifying and segmenting target audiences." },
//             { name: "Importance of Finance in Business", content: "Role of finance in business operations and growth." },
//             { name: "Basic Financial Statements", content: "Income statement, balance sheet, and cash flow statement." },
//             { name: "Role of Human Resources (HR)", content: "HR's role in recruitment, training, and management." }
//         ],
//         totalLessons: 6,
//         quizzes: [
//             {
//                 title: "Quiz: Business Fundamentals 2 – Marketing, Finance, and HR",
//                 questions: [
//                     { question: "What is the primary role of marketing in a business?", options: ["a) Handle employee relations", "b) Manage finances", "c) Promote and sell products to meet customer needs", "d) Oversee day-to-day operations"], answer: "c" },
//                     { question: "Which is NOT one of the 4 Ps of marketing?", options: ["a) Product", "b) Promotion", "c) Profit", "d) Place"], answer: "c" },
//                     { question: "What is a target market?", options: ["a) A specific group of potential customers", "b) Competitor’s customer base", "c) All companies in industry", "d) Region of production"], answer: "a" },
//                     { question: "Which describes the importance of finance in business?", options: ["a) Only for large corporations", "b) Ensures business operations and growth", "c) Employee satisfaction", "d) Track profits and losses"], answer: "b" },
//                     { question: "Which statement provides a snapshot of a company's financial position?", options: ["a) Cash flow", "b) Income statement", "c) Balance sheet", "d) Budget report"], answer: "c" }
//                 ]
//             }
//         ]
//     }
// ];


// const TabNavigation1 = ({ reviewsData }) => {
//     const [activeTab, setActiveTab] = useState('overview');

//     const renderTabContent = () => {
//         switch (activeTab) {
//             case 'overview':
//                 return <Overview />;
//             case 'curriculum':
//                 return <Curriculum data={curriculumData} />;
//             case 'instructor':
//                 return <Instructor />;
//             case 'reviews':
//                 return <Reviews reviewsData={reviewsData} />;
//             case 'faqs':
//                 return <FAQs />;
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="tab-container">
//             <div className="tabs">
//                 {['overview', 'curriculum', 'instructor', 'faqs', 'reviews'].map(tab => (
//                     <button
//                         key={tab}
//                         className={activeTab === tab ? 'active' : ''}
//                         onClick={() => setActiveTab(tab)}
//                     >
//                         {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                     </button>
//                 ))}
//             </div>
//             <div className="tab-content">
//                 {renderTabContent()}
//             </div>
//         </div>
//     );
// };
// console.log("Curriculum:", Curriculum); // Should be a function or class, not an object
// console.log("Instructor:", Instructor);
// console.log("Reviews:", Reviews);
// console.log("Overview:", Overview);
// console.log("FAQs:", FAQs);

// export default TabNavigation1;
