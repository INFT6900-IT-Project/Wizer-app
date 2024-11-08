
import React, { useState, useEffect } from 'react';
import Curriculum from './Curriculum';
import Instructor from './Instructor';
import Reviews from './Reviews';
import Overview from './Overview';
import FAQs from './FAQs';
import './TabNavigation.css'; 

const curriculumData = [
    {
        title: "Lessons With Video Content",
        lessons: [
            { name: "Lesson 1", time: "12:30", preview: true },
            { name: "Lesson 2", time: "10:05", preview: true },
            { name: "Lesson 3", time: "2:25", preview: true }
        ],
        totalLessons: 3,
        totalTime: "45 Mins"
    },
    {
        title: "Additional Lessons",
        lessons: [],
        totalLessons: 5,
        totalTime: "45 Mins"
    }
];

const TabNavigation = ({ reviewsData }) => {
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

export default TabNavigation;
