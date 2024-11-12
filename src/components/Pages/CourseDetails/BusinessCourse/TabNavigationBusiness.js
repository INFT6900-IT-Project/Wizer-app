//src\components\Pages\CourseDetails\BusinessCourse\TabNavigationBusiness.js
import React, { useState } from 'react';
import CurriculumBusiness from './CurriculumBusiness';
import InstructorBusiness from './InstructorBusiness';
import ReviewsBusiness from './ReviewsBusiness';
import OverviewBusiness from './OverviewBusiness';
import FAQsBusiness from './FAQsBusiness';
import '../TabNavigation.css';

const curriculumDataBusiness = [
    {
        title: "Module 1: Business Fundamentals",
        lessons: [
            { name: "Introduction to Business", preview: true },
            { name: "Types of Business Organizations", preview: true }
        ],
        totalLessons: 2,
        quizzes: [
            {
                title: "Quiz: Business Concepts",
                questions: [
                    { question: "What is the primary goal of most businesses?", options: ["Profit", "Expansion", "Market share", "Branding"], answer: "Profit" },
                    { question: "Which is NOT a type of business organization?", options: ["Corporation", "Sole proprietorship", "Community group", "Partnership"], answer: "Community group" },
                ]
            },
        ]
    },
    {
        title: "Module 2: Marketing & Management",
        lessons: [
            { name: "Basics of Marketing", preview: true },
            { name: "Introduction to Management", preview: true }
        ],
        totalLessons: 2,
        quizzes: [
            {
                title: "Quiz: Marketing and Management",
                questions: [
                    { question: "What are the '4Ps' of Marketing?", options: ["Product, Price, Place, Promotion", "Product, People, Price, Position", "Price, Place, Product, People", "Place, Product, Position, Promotion"], answer: "Product, Price, Place, Promotion" },
                    { question: "Which is a key function of management?", options: ["Marketing", "Planning", "Financing", "Branding"], answer: "Planning" },
                ]
            },
        ]
    }
];

const TabNavigationBusiness = ({ reviewsData }) => {
    const [activeTab, setActiveTab] = useState('overview');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'overview':
                return <OverviewBusiness />;
            case 'curriculum':
                return <CurriculumBusiness data={curriculumDataBusiness} />;
            case 'instructor':
                return <InstructorBusiness />;
            case 'reviews':
                return <ReviewsBusiness reviewsData={reviewsData} />;
            case 'faqs':
                return <FAQsBusiness />;
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

export default TabNavigationBusiness;
